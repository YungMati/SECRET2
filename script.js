let selectedFilters = {
  batch: [],
  category: [],
  priceMin: null,
  priceMax: null
};

let searchTerm = '';

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  document.getElementById('searchInput').addEventListener('input', handleSearch);
});

const products = [
  {
    name: "LOSOWE BAPESTY YOLO",
    batch: "random",
    category: "shoes",
    price: 40,
    image: "https://si.geilicdn.com/open1850717273-1234478995-22f700000192bc1be5ed0a22d234_1284_1531.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7291400265"
  },
  {
    name: "OKULARY CHROME HEARTS",
    batch: "best",
    category: "accessories",
    price: 7.30,
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01msnXzh1d4PCpasGXB_!!2214783223682-0-cib.jpg",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fdetail.1688.com%2Foffer%2F745886147107.html&affcode=zpf37"
  },
  {
    name: "ASICS GEL NYC",
    batch: "best",
    category: "shoes",
    price: 130,
    image: "https://si.geilicdn.com/pcitem1598851921-07610000019667bc7e460a2304aa_4284_4284.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D4287327189&affcode=zpf37"
  },
  {
    name: "AIR MAX+ DRIFT TN",
    batch: "random",
    category: "shoes",
    price: 67.42,
    image: "https://si.geilicdn.com/wdseller1845163825-4c8f00000195d535fcee0a2304aa_1179_1179.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7412950750&affcode=zpf37"
  },
  {
    name: "KOSZULKI PIŁKARSKIE",
    batch: "budget",
    category: "shirts",
    price: 38.77,
    image: "https://si.geilicdn.com/open1762039621-252808396-624b000001962545e3560a23b4de_1196_1196.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7447222352&affcode=zpf37"
  },
{
    name: "CZAPKA SEX INSTRUKTOR",
    batch: "best",
    category: "hats",
    price: 3.66,
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01Dh3BA91y1kmWapIc5_!!2208779926519-0-cib.jpg",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fikako.vip%252F7wbru"
  },
{
    name: "LABUBU",
    batch: "best",
    category: "accessories",
    price: 21.35,
    image: "https://si.geilicdn.com/open1758548380-1234478995-49cb0000019701527a730aa0834c_1600_1600.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7477348310&affcode=vector"
  },
  {
    name: "CROCS x BAPE",
    batch: "best",
    category: "shoes",
    price: 89.89,
    image: "https://si.geilicdn.com/wdseller507105153-6ffe000001975615196d0a2102b1_1170_1170.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fweidian.com%252Fitem.html%253FitemID%253D7488679329%2526wfr%253Dc%2526source%253Dgoods_home%2526ifr%253Ditemdetail%2526sfr%253Dapp"
  },

{
    name: "KOSZULKA SUPREME",
    batch: "best",
    category: "shirts",
    price: 50.57,
    image: "https://photo.yupoo.com/noghost/e8d9f3fe/8f742724.jpg",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fweidian.com%252Fitem.html%253FitemID%253D7441311679"
  },

{
    name: "KOSZULKA CORTEIZ",
    batch: "budget",
    category: "shirts",
    price: 20.17,
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01L2PAiX1zbJEXlqYZS_!!2215823446732-0-cib.jpg",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fikako.vip%252Fs2mue"
  },

{
    name: "SPODENKI CORTEIZ JEANSOWE",
    batch: "best",
    category: "shorts",
    price: 57.87,
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01sDmW0A1zbJDjVtmE0_!!2215823446732-0-cib.jpg",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fdetail.1688.com%2Foffer%2F753380910952.html&affcode=t8697"
  },

{
    name: "LOSOWE SKARPETKI",
    batch: "best",
    category: "underwear",
    price: 3.88,
    image: "https://si.geilicdn.com/pcitem1923191567-6b3200000196fb970ad80a23057e_1280_1706.jpg?w=750&h=750&cp=1",
    link: "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7474677975&affcode=t8697"
  }
];

function renderProducts() {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach(product => {
    const batchMatch = selectedFilters.batch.length === 0 || selectedFilters.batch.includes(product.batch);
    const categoryMatch = selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category);
    const priceMatch =
      (!selectedFilters.priceMin || product.price >= selectedFilters.priceMin) &&
      (!selectedFilters.priceMax || product.price <= selectedFilters.priceMax);
    const searchMatch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm);

    if (batchMatch && categoryMatch && priceMatch && searchMatch) {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="tag">${product.batch}</div>
        <div class="tag">${product.category}</div>
        <h3>${product.name}</h3>
        <p class="price">${product.price} PLN</p>
        <a href="${product.link}" target="_blank">Link</a>
      `;
      container.appendChild(div);
    }
  });
}

function toggleFilter(type, value) {
  // dla batch i category – tylko jeden może być aktywny
  if (type === 'batch' || type === 'category') {
    if (selectedFilters[type].includes(value)) {
      selectedFilters[type] = []; // odznacz jeśli kliknięto jeszcze raz
    } else {
      selectedFilters[type] = [value]; // wybierz tylko jeden
    }
  }

  updateFilterStyles();
  renderProducts();
}
  
function updateFilterStyles() {
  document.querySelectorAll('[data-filter="batch"]').forEach(btn => {
    btn.style.backgroundColor = selectedFilters.batch.includes(btn.dataset.value) ? '#ff0033' : '#111';
    btn.style.color = selectedFilters.batch.includes(btn.dataset.value) ? '#000' : '#fff';
  });

  document.querySelectorAll('[data-filter="category"]').forEach(btn => {
    btn.style.backgroundColor = selectedFilters.category.includes(btn.dataset.value) ? '#ff0033' : '#111';
    btn.style.color = selectedFilters.category.includes(btn.dataset.value) ? '#000' : '#fff';
  });
}

function applyPriceFilter() {
  const min = parseFloat(document.getElementById('priceMin').value);
  const max = parseFloat(document.getElementById('priceMax').value);

  selectedFilters.priceMin = isNaN(min) ? null : min;
  selectedFilters.priceMax = isNaN(max) ? null : max;

  renderProducts();
}

function handleSearch(e) {
  searchTerm = e.target.value.toLowerCase();
  renderProducts();
}

function togglePanel() {
  const panel = document.getElementById('filter-panel');
  panel.classList.toggle('show');
}
