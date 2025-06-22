document.addEventListener('DOMContentLoaded', function() {
    // Elementy DOM
    const filterButton = document.getElementById('filterButton');
    const filtersPanel = document.getElementById('filtersPanel');
    const productsContainer = document.getElementById('productsContainer');
    const searchInput = document.getElementById('searchInput');
    const adminLogin = document.getElementById('adminLogin');
    
    // Dane
    let products = [];
    
    // Wczytaj produkty
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            products = data;
            displayProducts(products);
        });
    
    // Filtrowanie
    filterButton.addEventListener('click', () => {
        filtersPanel.style.display = filtersPanel.style.display === 'block' ? 'none' : 'block';
    });
    
    // Logika wyszukiwania
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filtered);
    });
    
    // Wyświetl produkty
    function displayProducts(productsToDisplay) {
        productsContainer.innerHTML = '';
        productsToDisplay.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'product';
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price} PLN</p>
                <a href="${product.link}" target="_blank">Zobacz produkt</a>
            `;
            productsContainer.appendChild(productElement);
        });
    }
    
    // Przejście do panelu admina
    adminLogin.addEventListener('click', () => {
        window.location.href = 'admin.html';
    });
});
