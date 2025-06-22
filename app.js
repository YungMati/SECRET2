const API = 'https://your-backend-url.onrender.com/products';

async function loadProducts() {
  const res = await fetch(API);
  const data = await res.json();
  renderProducts(data);
}

function renderProducts(products) {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" style="width:100%;">
      <p>${p.name}</p>
      <p>${p.price} PLN</p>
      <p>${p.batch === 'best' ? '⭐ BEST' : '💰 BUDGET'}</p>
    `;
    div.style.background = '#222';
    div.style.padding = '10px';
    div.style.borderRadius = '10px';
    list.appendChild(div);
  });
}

document.getElementById('filterToggle').onclick = () => {
  const filters = document.getElementById('filters');
  filters.style.display = filters.style.display === 'flex' ? 'none' : 'flex';
};

document.getElementById('logo').onclick = () => {
  window.location.href = 'admin.html';
};

loadProducts();
