async function loadProducts() {
  const batch = document.getElementById('batchFilter').value;
  const res = await fetch('https://admin-shop-backend.onrender.com/api/products');
  const data = await res.json();
  const filtered = batch ? data.filter(p => p.batch === batch) : data;

  const container = document.getElementById('products');
  container.innerHTML = '';
  filtered.forEach(p => {
    container.innerHTML += `
      <div>
        <img src="${p.image}" />
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <b>${p.price} zł</b>
      </div>
    `;
  });
}
loadProducts();
