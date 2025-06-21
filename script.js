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
<script>
  const correctLogin = "admin";
  const correctPassword = "yung123";

  function checkLogin() {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    if (login === correctLogin && password === correctPassword) {
      document.getElementById("loginBox").style.display = "none";
      document.getElementById("adminPanel").classList.remove("hidden");
    } else {
      alert("Nieprawidłowy login lub hasło!");
    }
  }
</script>
