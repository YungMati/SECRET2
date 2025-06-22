document.addEventListener('DOMContentLoaded', function() {
    // Toggle filters panel
    const filterToggle = document.getElementById('filterToggle');
    const filtersPanel = document.getElementById('filtersPanel');
    const closeFilters = document.getElementById('closeFilters');
    
    filterToggle.addEventListener('click', function() {
        filtersPanel.classList.toggle('active');
    });
    
    closeFilters.addEventListener('click', function() {
        filtersPanel.classList.remove('active');
    });
    
    // Zastosuj filtry (przykładowa funkcjonalność)
    const applyFilters = document.getElementById('applyFilters');
    
    applyFilters.addEventListener('click', function() {
        // Tutaj będzie kod filtrowania produktów
        alert('Filtry zastosowane! Tutaj będzie rzeczywista implementacja filtrowania produktów.');
        filtersPanel.classList.remove('active');
    });
    
    // Przykładowe ładowanie produktów z backendu
    // W rzeczywistości będzie to fetchowanie danych z API
    function loadProducts() {
        console.log('Ładowanie produktów z backendu...');
        // Tutaj będzie fetch do API backendu
    }
    
    loadProducts();
});
