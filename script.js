let products = [];
let filteredProducts = [];
let selectedCategories = [];
let selectedBatches = [];
let minPrice = 0;
let maxPrice = Infinity;

// DOM Elements
const filterPanel = document.getElementById("filterPanel");
const filterToggle = document.getElementById("filterToggle");
const applyFiltersBtn = document.getElementById("applyFilters");
const searchInput = document.getElementById("searchInput");
const productGrid = document.getElementById("productGrid");
const categoryButtons = document.querySelectorAll(".category-filter");
const batchButtons = document.querySelectorAll(".batch-filter");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");

filterToggle.addEventListener("click", () => {
  filterPanel.classList.toggle("active");
});

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const category = btn.getAttribute("data-category");
    if (selectedCategories.includes(category)) {
      selectedCategories = selectedCategories.filter(c => c !== category);
    } else {
      selectedCategories.push(category);
    }
  });
});

batchButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const batch = btn.getAttribute("data-batch");
    if (selectedBatches.includes(batch)) {
      selectedBatches = selectedBatches.filter(b => b !== batch);
    } else {
      selectedBatches.push(batch);
    }
  });
});

applyFiltersBtn.addEventListener("click", () => {
  minPrice = parseFloat(minPriceInput.value) || 0;
  maxPrice = parseFloat(maxPriceInput.value) || Infinity;
  applyFilters();
  filterPanel.classList.remove("active");
});

searchInput.addEventListener("input", () => {
  applyFilters();
});

function applyFilters() {
  const searchText = searchInput.value.toLowerCase();

  filteredProducts = products.filter(product => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchBatch = selectedBatches.length === 0 || selectedBatches.includes(product.batch);
    const matchPrice = product.price >= minPrice && product.price <= maxPrice;
    const matchSearch = product.name.toLowerCase().includes(searchText);
    return matchCategory && matchBatch && matchPrice && matchSearch;
  });

  renderProducts(filteredProducts);
}

function renderProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>${product.price} zł</strong></p>
      <a href="${product.link}" target="_blank">Link</a>
    `;
    productGrid.appendChild(div);
  });
}

// Load products from data.json
fetch("/data.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    filteredProducts = data;
    renderProducts(data);
  })
  .catch(err => {
    console.error("Błąd wczytywania danych:", err);
  });
