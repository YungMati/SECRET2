const products = [
  {
    name: "Red Neon Cap",
    category: "hats",
    batch: "best",
    price: 49,
    image: "https://via.placeholder.com/300x300.png?text=Cap",
    link: "#"
  },
  {
    name: "LED Tech Shirt",
    category: "shirts",
    batch: "budget",
    price: 79,
    image: "https://via.placeholder.com/300x300.png?text=Shirt",
    link: "#"
  },
  {
    name: "Cool Pants",
    category: "pants",
    batch: "random",
    price: 99,
    image: "https://via.placeholder.com/300x300.png?text=Pants",
    link: "#"
  }
];

function renderProducts(list) {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  list.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <div class="tag">${p.category}</div>
        <div class="tag">${p.batch}</div>
        <div class="price">${p.price} PLN</div>
        <a href="${p.link}" target="_blank">LINK</a>
      </div>
    `;
  });
}

function toggleFilter() {
  document.getElementById("filter-panel").classList.toggle("show");
}

function filterBatch(batch) {
  const filtered = products.filter(p => p.batch === batch);
  renderProducts(filtered);
}

function filterCategory(cat) {
  const filtered = products.filter(p => p.category === cat);
  renderProducts(filtered);
}

function applyPriceFilter() {
  const min = parseFloat(document.getElementById("minPrice").value) || 0;
  const max = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const filtered = products.filter(p => p.price >= min && p.price <= max);
  renderProducts(filtered);
}

renderProducts(products);
