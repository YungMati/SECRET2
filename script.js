async function loadProducts() {
  const batch = document.getElementById('batchFilter').value;
  const res = await fetch('https://admin-shop-backend.onrender.com/api/products');
  const data = await res.json();
  const filtered = batch ? data.filter(p => p.batch === batch) : data;

  const container = document.getElementById('products');
  container.innerHTML = '';
  filtered.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <strong>${p.price} zł</strong>
      </div>
    `;
  });
}

function toggleFilters() {
  document.getElementById('filters').classList.toggle('hidden');
}

loadProducts();
