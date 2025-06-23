let selectedFilters = {
  batch: [],
  category: [],
  priceMin: null,
  priceMax: null
};

let searchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  document.getElementById('searchInput').addEventListener('input', handleSearch);
});

const products = [
  {
    name: "Czapka Yung",
    category: "hats",
    batch: "best",
    price: 39,
    image: "https://via.placeholder.com/200x200.png?text=Czapka",
    link: "#"
  },
  {
    name: "Bluza Flame",
    category: "hoodies",
    batch: "budget",
    price: 99,
    image: "https://via.placeholder.com/200x200.png?text=Bluza",
    link: "#"
  },
  {
    name: "Koszulka Red",
    category: "shirts",
    batch: "random",
    price: 49,
    image: "https://via.placeholder.com/200x200.png?text=Koszulka",
    link: "#"
  }
];

function renderProducts() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach(product => {
    const batchMatch = selectedFilters.batch.length === 0 || selectedFilters.batch.includes(product.batch);
    const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category);
    const priceMatch =
      (!selectedFilters.priceMin || product.price >= selectedFilters.priceMin) &&
      (!selectedFilters.priceMax || product.price <= selectedFilters.priceMax);
    const searchMatch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm);

    if (batchMatch && categoryMatch && priceMatch && searchMatch) {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="tag">${product.batch}</div>
        <div class="tag">${product.category}</div>
        <h3>${product.name}</h3>
        <p class="price">${product.price} PLN</p>
        <a href="${product.link}" target="_blank">Link</a>
      `;
      container.appendChild(div);
    }
  });
}

function toggleFilter(type, value) {
  const list = selectedFilters[type];

  if (list.includes(value)) {
    selectedFilters[type] = list.filter(v => v !== value);
  } else {
    selectedFilters[type].push(value);
  }

  updateFilterStyles();
  renderProducts();
}

function updateFilterStyles() {
  document.querySelectorAll('[data-filter="batch"]').forEach(btn => {
    btn.style.backgroundColor = selectedFilters.batch.includes(btn.dataset.value) ? '#ff0033' : '#111';
    btn.style.color = selectedFilters.batch.includes(btn.dataset.value) ? '#000' : '#fff';
  });

  document.querySelectorAll('[data-filter="category"]').forEach(btn => {
    btn.style.backgroundColor = selectedFilters.category.includes(btn.dataset.value) ? '#ff0033' : '#111';
    btn.style.color = selectedFilters.category.includes(btn.dataset.value) ? '#000' : '#fff';
  });
}

function applyPriceFilter() {
  const min = parseFloat(document.getElementById('priceMin').value);
  const max = parseFloat(document.getElementById('priceMax').value);

  selectedFilters.priceMin = isNaN(min) ? null : min;
  selectedFilters.priceMax = isNaN(max) ? null : max;

  renderProducts();
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase();
  renderProducts();
}

function togglePanel() {
  const panel = document.getElementById('filter-panel');
  panel.classList.toggle('show');
}
