const container = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const filterToggle = document.getElementById("filterToggle");
const filterSidebar = document.getElementById("filterSidebar");

async function fetchProducts() {
  const res = await fetch("https://secret-3y8t.onrender.com"); // ZMIEŃ jeśli inny
  const data = await res.json();
  return data;
}

function renderProducts(products) {
  container.innerHTML = "";
  products.forEach((p) => {
    const box = document.createElement("div");
    box.className = "product";
    box.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p><b>Batch:</b> ${p.batch}</p>
      <p><b>Category:</b> ${p.category}</p>
      <p>${p.description}</p>
      <a href="${p.link}" target="_blank"><button>LINK</button></a>
    `;
    container.appendChild(box);
  });
}

function applyFilters(products) {
  const search = searchInput.value.toLowerCase();
  const selectedBatch = Array.from(document.querySelectorAll(".batch-filter:checked")).map(el => el.value);
  const selectedCat = Array.from(document.querySelectorAll(".category-filter:checked")).map(el => el.value);

  return products.filter(p =>
    p.name.toLowerCase().includes(search) &&
    (selectedBatch.length === 0 || selectedBatch.includes(p.batch)) &&
    (selectedCat.length === 0 || selectedCat.includes(p.category))
  );
}

searchInput.addEventListener("input", async () => {
  const all = await fetchProducts();
  renderProducts(applyFilters(all));
});

document.querySelectorAll("input[type='checkbox']").forEach(cb => {
  cb.addEventListener("change", async () => {
    const all = await fetchProducts();
    renderProducts(applyFilters(all));
  });
});

filterToggle.addEventListener("click", () => {
  filterSidebar.classList.toggle("show");
});

window.addEventListener("load", async () => {
  const products = await fetchProducts();
  renderProducts(products);
});
