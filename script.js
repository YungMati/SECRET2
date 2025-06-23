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
    "name": "LOSOWE BAPESTY YOLO",
    "batch": "random",
    "category": "shoes",
    "price": 40,
    "image": "https://si.geilicdn.com/open1850717273-1234478995-22f700000192bc1be5ed0a22d234_1284_1531.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7291400265"
  },
  {
    "name": "OKULARY CHROME HEARTS",
    "batch": "best",
    "category": "accessories",
    "price": 7.30,
    "image": "https://cbu01.alicdn.com/img/ibank/O1CN01msnXzh1d4PCpasGXB_!!2214783223682-0-cib.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fdetail.1688.com%2Foffer%2F745886147107.html&affcode=yungr3ps"
  },
  {
    "name": "ASICS GEL NYC",
    "batch": "best",
    "category": "shoes",
    "price": 130,
    "image": "https://si.geilicdn.com/pcitem1598851921-07610000019667bc7e460a2304aa_4284_4284.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D4287327189&affcode=yungr3ps"
  },
  {
    "name": "AIR MAX+ DRIFT TN",
    "batch": "random",
    "category": "shoes",
    "price": 67.42,
    "image": "https://si.geilicdn.com/wdseller1845163825-4c8f00000195d535fcee0a2304aa_1179_1179.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7412950750&affcode=yungr3ps"
  },
  {
    "name": "KOSZULKI PIŁKARSKIE",
    "batch": "budget",
    "category": "shirts",
    "price": 38.77,
    "image": "https://si.geilicdn.com/open1762039621-252808396-624b000001962545e3560a23b4de_1196_1196.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7447222352&affcode=yungr3ps"
  },
  {
    "name": "CZAPKA SEX INSTRUKTOR",
    "batch": "best",
    "category": "hats",
    "price": 3.66,
    "image": "https://cbu01.alicdn.com/img/ibank/O1CN01Dh3BA91y1kmWapIc5_!!2208779926519-0-cib.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fikako.vip%252F7wbru"
  },
  {
    "name": "LABUBU",
    "batch": "best",
    "category": "accessories",
    "price": 21.35,
    "image": "https://si.geilicdn.com/open1758548380-1234478995-49cb0000019701527a730aa0834c_1600_1600.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7477348310&affcode=yungr3ps"
  },
  {
    "name": "SPODENKI CORTEIZ",
    "batch": "budget",
    "category": "shorts",
    "price": 57.87,
    "image": "https://cbu01.alicdn.com/img/ibank/O1CN01sDmW0A1zbJDjVtmE0_!!2215823446732-0-cib.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fdetail.1688.com%2Foffer%2F753380910952.html&affcode=yungr3ps"
  },
  {
    "name": "LOSOWE SKARPETKI",
    "batch": "best",
    "category": "underwear",
    "price": 3.88,
    "image": "https://si.geilicdn.com/pcitem1923191567-6b3200000196fb970ad80a23057e_1280_1706.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7474677975&affcode=yungr3ps"
  },
  {
    "name": "VIRALOWA BLUZA Z KOMINIARKĄ",
    "batch": "best",
    "category": "hoodies",
    "price": 22.48,
    "image": "https://cbu01.alicdn.com/img/ibank/O1CN01L5WvUZ20xaCtYkdcv_!!3247256916-0-cib.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fdetail.1688.com%2Foffer%2F859632289526.html&affcode=yungr3ps"
  },
  {
    "name": "JORDAN 4 KX best budget",
    "batch": "budget",
    "category": "shoes",
    "price": 122,
    "image": "https://si.geilicdn.com/pcitem1425026222-576700000192f4021a8e0a239646-unadjust_2250_2250.png?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fweidian.com%252Fitem.html%253FitemID%253D6353081514"
  },
  {
    "name": "KOMINIARKA SUPREME",
    "batch": "best",
    "category": "accessories",
    "price": 39.11,
    "image": "https://si.geilicdn.com/wdseller1863579153-43ba00000194e472ea300a207569_1228_1228.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D883481045520"
  },
  {
    "name": "BLUZA DENIM TEARS",
    "batch": "best",
    "category": "hoodies",
    "price": 166.47,
    "image": "https://img.alicdn.com/bao/uploaded/i4/2217868191481/O1CN01fXbhZH1MoLWnUwQz5_!!2217868191481.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fm.intl.taobao.com%2Fdetail%2Fdetail.html%3Fft%3Dt%26id%3D794384453885&affcode=yungr3ps"
  },
  {
    "name": "AIR PODS",
    "batch": "best",
    "category": "technology",
    "price": 100,
    "image": "https://si.geilicdn.com/pcitem1681028290-03890000019090e6e5f20a23047e_376_375.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7247449195&affcode=yungr3ps"
  },
  {
    "name": "Air Force",
    "batch": "best",
    "category": "shoes",
    "price": 50,
    "image": "https://si.geilicdn.com/pcitem901841077607-353c0000018e7dd0dd1b0a231418_2560_2564.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7231813766&affcode=yungr3ps"
  },
  {
    "name": "BALENCIAGA TRACK LED",
    "batch": "best",
    "category": "shoes",
    "price": 276,
    "image": "https://si.geilicdn.com/pcitem1854263096-6e9000000196ee98f2370a21146b_720_1086.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7433573437&affcode=yungr3ps"
  },
  {
    "name": "KOSZULKA BARCELONY",
    "batch": "best",
    "category": "shirts",
    "price": 36.32,
    "image": "https://kako-alosshk-pic.kakobuy.com/whg/202506/22/d97726bab49ccc0e5fab5640bb9d9d9d.jpg",
    "link": "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D920958840300%26spm%3Da213gs.v2success.0.0.6d254831ndd2Vw&refcode=yungr3ps"
  },
  {
    "name": "SET TRAPSTARE",
    "batch": "best",
    "category": "set",
    "price": 38.36,
    "image": "https://si.geilicdn.com/wdseller163498710-23bc00000189b4c9b7180a2104c1_750_750.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fshop1838951640.v.weidian.com%2Fitem.html%3FitemID%3D7234164467%26spider_token%3D4c5b&refcode=yungr3ps"
  },
  {
    "name": "JORDAN 4 GX",
    "batch": "best",
    "category": "shoes",
    "price": 257,
    "image": "https://si.geilicdn.com/pcitem1854263096-15cc00000195de646cbb0a23038e_1200_1200.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7437069740&affcode=yungr3ps"
  },
  {
    "name": "SYNA WORLD SET",
    "batch": "best",
    "category": "set",
    "price": 137,
    "image": "https://si.geilicdn.com/wdseller1274221412-092e0000019676835e820a2301b4_1284_1284.jpg?w=750&h=750&cp=1",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7457005392%26wfr%3Dc&refcode=yungr3ps"
  },
  {
    "name": "PASEK DIESEL",
    "batch": "best",
    "category": "belts",
    "price": 9.36,
    "image": "https://img.alicdn.com/imgextra/i2/2211872109715/O1CN01qGrXy12LdWZB0itZ1_!!2211872109715.jpg",
    "link": "https://m.kakobuy.com/pages/goods-detail/goods-detail?url=https%253A%252F%252Fitem.taobao.com%252Fitem.htm%253Fid%253D689047427915&refcode=yungr3ps"
  }
]



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
