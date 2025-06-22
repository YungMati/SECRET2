let products = [];

fetch('/data.json')
  .then(res => res.json())
  .then(data => {
    products = data;
    renderProducts(products);
    generateFilters();
  });

function renderProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}"/>
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <p><b>${p.price} zł</b></p>
        <a href="${p.link || '#'}" target="_blank">Link</a>
      </div>`;
  });
}

function generateFilters() {
  const cats = [...new Set(products.map(p => p.category))];
  const batches = [...new Set(products.map(p => p.batch))];

  document.getElementById("categoryFilter").innerHTML = cats.map(c => 
    `<button onclick="toggleFilter(this, 'category')">${c}</button>`).join('');

  document.getElementById("batchFilter").innerHTML = batches.map(b => 
    `<button onclick="toggleFilter(this, 'batch')">${b}</button>`).join('');
}

let activeFilters = { category: [], batch: [] };

function toggleFilter(btn, type) {
  btn.classList.toggle('active');
  const value = btn.textContent;
  if (activeFilters[type].includes(value)) {
    activeFilters[type] = activeFilters[type].filter(v => v !== value);
  } else {
    activeFilters[type].push(value);
  }
}

function applyFilters() {
  const min = parseFloat(document.getElementById('minPrice').value) || 0;
  const max = parseFloat(document.getElementById('maxPrice').value) || Infinity;

  const filtered = products.filter(p =>
    (!activeFilters.category.length || activeFilters.category.includes(p.category)) &&
    (!activeFilters.batch.length || activeFilters.batch.includes(p.batch)) &&
    p.price >= min && p.price <= max
  );
  renderProducts(filtered);
}

function toggleFilters() {
  const panel = document.getElementById("filterPanel");
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
}
