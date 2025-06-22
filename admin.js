document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'YungMati' && password === 'vawjej-fetfuq-gIqwy5') {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    alert('Invalid credentials');
  }
});

document.getElementById('addProductForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const product = {
    name: document.getElementById('name').value,
    image: document.getElementById('image').value,
    price: parseFloat(document.getElementById('price').value),
    category: document.getElementById('category').value,
    batch: document.getElementById('batch').value,
    description: document.getElementById('description').value
  };

  fetch('/add-product', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  }).then(res => {
    if (res.ok) {
      alert('Product added!');
      document.getElementById('addProductForm').reset();
    } else {
      alert('Error adding product');
    }
  });
});
