async function loadProducts() {
  const res = await fetch("https://twoj-backend.onrender.com/api/products");
  const data = await res.json();
  window.allProducts = data;
  renderProducts(data);
}

function renderProducts(products) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.image || 'https://via.placeholder.com/200'}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price}</p>
      <small>${p.category}</small>
    `;
    container.appendChild(div);
  });
}

function applyFilters() {
  let filtered = window.allProducts;

  const search = document.getElementById("search").value.toLowerCase();
  const best = document.getElementById("best").checked;
  const budget = document.getElementById("budget").checked;

  const categories = [...document.querySelectorAll(".category:checked")].map(c => c.value);

  filtered = filtered.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search);
    const matchBest = !best || p.best;
    const matchBudget = !budget || p.budget;
    const matchCategory = categories.length === 0 || categories.includes(p.category);
    return matchSearch && matchBest && matchBudget && matchCategory;
  });

  renderProducts(filtered);
}

document.getElementById("search").addEventListener("input", applyFilters);
document.querySelectorAll("input").forEach(input => input.addEventListener("change", applyFilters));
document.getElementById("filter-toggle").addEventListener("click", () => {
  document.getElementById("filters").classList.toggle("visible");
});

loadProducts();
