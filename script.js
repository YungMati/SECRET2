document.getElementById('filterToggle').addEventListener('click', () => {
  const filters = document.getElementById('filters');
  filters.classList.toggle('visible');
});

const productList = document.getElementById('productList');

async function fetchProducts() {
  const res = await fetch('https://your-backend-url.com/products');
  const products = await res.json();

  products.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" />
      <div class="info">
        <h2>${prod.name}</h2>
        <div class="meta">${prod.batch} | ${prod.category}</div>
        <p>${prod.description}</p>
        <a href="${prod.link}" target="_blank">LINK</a>
      </div>
    `;
    productList.appendChild(div);
  });
}

fetchProducts();
