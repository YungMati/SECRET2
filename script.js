const products = [
  {
    name: "Xiaomi Watch",
    description: "Smartwatch z GPS",
    price: "129 zł",
    category: "electronics",
    batch: "best",
    image: "https://via.placeholder.com/300"
  },
  {
    name: "Kabel USB-C",
    description: "Szybkie ładowanie",
    price: "15 zł",
    category: "accessories",
    batch: "budżet",
    image: "https://via.placeholder.com/300"
  }
];

let activeFilters = { category: [], batch: [] };

function toggleFilterPanel() {
  document.getElementById("filterPanel").classList.toggle("visible");
}

function toggleFilter(type, value) {
  const btns = document.querySelectorAll(`#${type}Filter button`);
  btns.forEach(btn => {
    if (btn.textContent.toLowerCase() === value) {
      btn.classList.toggle("active-filter");
    }
  });

  if (activeFilters[type].includes(value)) {
    activeFilters[type] = activeFilters[type].filter(v => v !== value);
  } else {
    activeFilters[type].push(value);
  }

  displayProducts();
}

function filterProducts() {
  displayProducts();
}

function displayProducts() {
  const list = document.getElementById("productList");
  if (!list) return;
  list.innerHTML = "";

  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search);
    const matchesCategory = activeFilters.category.length === 0 || activeFilters.category.includes(p.category);
    const matchesBatch = activeFilters.batch.length === 0 || activeFilters.batch.includes(p.batch);
    return matchesSearch && matchesCategory && matchesBatch;
  });

  filtered.forEach(p => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <span class="price">${p.price}</span>
      <a href="#" class="link-btn">Kup</a>
    `;
    list.appendChild(el);
  });
}

function login() {
  const login = document.getElementById("adminLogin").value;
  const pass = document.getElementById("adminPassword").value;

  if (login === "YungMati" && pass === "vawjej-fetfuq-gIqwy5") {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("adminPanel").classList.remove("hidden");
    renderAdminProducts();
  } else {
    alert("Zły login lub hasło");
  }
}

function renderAdminProducts() {
  const list = document.getElementById("adminProductList");
  if (!list) return;
  list.innerHTML = "";

  products.forEach((p, i) => {
    const el = document.createElement("div");
    el.className = "product";
    el.innerHTML = `
      <img src="${p.image}" />
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <span class="price">${p.price}</span>
      <button class="delete-btn" onclick="deleteProduct(${i})">Usuń</button>
    `;
    list.appendChild(el);
  });
}

function deleteProduct(index) {
  products.splice(index, 1);
  renderAdminProducts();
  displayProducts();
}

window.onload = () => {
  displayProducts();
};
