document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Tutaj dodaj kod do wysyłania danych do backendu
});

function toggleFilters() {
    const filters = document.getElementById('filters');
    filters.style.display = filters.style.display === 'block' ? 'none' : 'block';
}

function applyFilters() {
    // Tutaj dodaj kod do stosowania filtrów
}
