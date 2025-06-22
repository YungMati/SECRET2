const username = "YungMati";
const password = "vawjej-fetfuq-gIqwy5";

function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === username && p === password) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Wrong credentials");
  }
}

function addProduct() {
  const data = {
    name: document.getElementById("name").value,
    image: document.getElementById("image").value,
    price: parseFloat(document.getElementById("price").value),
    description: document.getElementById("description").value,
    batch: document.getElementById("batch").value,
    category: document.getElementById("category").value
  };

  fetch('/add-product', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(res => res.json()).then(resp => {
    alert("Product added!");
  });
}
