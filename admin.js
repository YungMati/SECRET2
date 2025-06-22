document.addEventListener('DOMContentLoaded', function() {
    const ADMIN_PASSWORD = "twoje_haslo"; // Zmień to!
    const loginForm = document.getElementById('adminLoginForm');
    const adminPanel = document.getElementById('adminPanel');
    const loginButton = document.getElementById('loginButton');
    const addProductButton = document.getElementById('addProductButton');
    
    // Logowanie
    loginButton.addEventListener('click', () => {
        const password = document.getElementById('adminPassword').value;
        if (password === ADMIN_PASSWORD) {
            loginForm.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            alert('Nieprawidłowe hasło!');
        }
    });
    
    // Dodawanie produktu
    addProductButton.addEventListener('click', () => {
        const newProduct = {
            name: document.getElementById('productName').value,
            link: document.getElementById('productLink').value,
            image: document.getElementById('productImage').value,
            batch: document.getElementById('productBatch').value,
            category: document.getElementById('productCategory').value,
            price: document.getElementById('productPrice').value
        };
        
        fetch('products.json')
            .then(response => response.json())
            .then(products => {
                products.push(newProduct);
                return fetch('products.json', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(products)
                });
            })
            .then(() => alert('Produkt dodany!'))
            .catch(error => console.error('Error:', error));
    });
});
