const products = [
  {
    name: "Black T-Shirt",
    price: 49,
    image: "https://via.placeholder.com/300x300",
    category: "T-Shirts",
    batch: "best",
    link: "#"
  },
  {
    name: "Red Hoodie",
    price: 99,
    image: "https://via.placeholder.com/300x300",
    category: "Hoodies",
    batch: "budget",
    link: "#"
  },
  {
    name: "Joggers",
    price: 89,
    image: "https://via.placeholder.com/300x300",
    category: "Pants",
    batch: "best",
    link: "#"
  },
  {
    name: "Cap",
    price: 39,
    image: "https://via.placeholder.com/300x300",
    category: "Accessories",
    batch: "budget",
    link: "#"
  }
];

const productContainer = document.getElementById("productContainer");

function displayProducts(data) {
  productContainer.innerHTML = "";
  data.forEach(product => {
    productContainer.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <div class="info">
          <h4>${product.name}</h4>
          <p>$${product.price}</p>
        </div>
        <a href="${product.link}">Link</a>
      </div>
    `;
  });
}

displayProducts(products);

// Filters
document.getElementById("filterToggle").addEventListener("click", () => {
  document.getElementById("filterPanel").classList.toggle("open");
});

document.querySelectorAll(".filter-group button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

document.getElementById("applyFilters").addEventListener("click", () => {
  const activeCategories = [...document.querySelectorAll('[data-type="category"] button.active')].map(b => b.textContent);
  const activeBatches = [...document.querySelectorAll('[data-type="batch"] button.active')].map(b => b.textContent);
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
  const search = document.getElementById("searchInput").value.toLowerCase();

  const filtered = products.filter(p =>
    (activeCategories.length === 0 || activeCategories.includes(p.category)) &&
    (activeBatches.length === 0 || activeBatches.includes(p.batch)) &&
    (p.price >= minPrice && p.price <= maxPrice) &&
    (p.name.toLowerCase().includes(search))
  );

  displayProducts(filtered);
});

document.getElementById("searchInput").addEventListener("input", () => {
  document.getElementById("applyFilters").click();
});
