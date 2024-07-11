/* Select menu */
const optionMenu = document.querySelector(".select-menu");
const headerSearchBlog = document.querySelector(".header_search-block");
const headerInputs = document.querySelectorAll(".header_search-input input");

if (optionMenu) {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const options = optionMenu.querySelectorAll(".option");
  const sBtn_text = selectBtn.querySelector(".sBtn-text");

  selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    headerSearchBlog.classList.toggle("select-active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      headerSearchBlog.classList.remove("select-active");
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      optionMenu.classList.remove("active");

      headerInputs.forEach((input) => {
        input.classList.add("d-none");
        if (
          selectedOption === "Cửa hàng" &&
          input.classList.contains("header_input-store")
        ) {
          input.classList.remove("d-none");
        } else if (
          selectedOption === "Sản phẩm" &&
          input.classList.contains("header_input-product")
        ) {
          input.classList.remove("d-none");
        }
      });
    });
  });
} else {
  console.error("Could not find element with class 'select-menu'");
}

/* Search history */
const storeInput = document.querySelector(".header_input-product");
const searchHistory = document.querySelector(".header_search-history");

storeInput.addEventListener("input", function () {
  if (storeInput.value.trim() !== "") {
    searchHistory.classList.add("show");
    headerSearchBlog.classList.add("history-active");
  } else {
    searchHistory.classList.remove("show");
    headerSearchBlog.classList.remove("history-active");
  }
});

// Optional: Hide search history when clicking outside
document.addEventListener("click", function (event) {
  if (
    !storeInput.contains(event.target) &&
    !searchHistory.contains(event.target)
  ) {
    searchHistory.classList.remove("show");
    headerSearchBlog.classList.remove("history-active");
  }
});

/* Swiper */
var swiper = new Swiper(".content_sliders", {
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

/* Product category*/
const productCategories = [
  {
    title: "Trái cây",
    url: "../images/home/product-category/traicay.png",
  },
  {
    title: "Thịt, trứng",
    url: "../images/home/product-category/thittrung.png",
  },
  {
    title: "Cá, thuỷ hải sản",
    url: "../images/home/product-category/cathuyhaisan.png",
  },
  {
    title: "Rau, củ",
    url: "../images/home/product-category/raucu.png",
  },
  {
    title: "Thực phẩm Việt",
    url: "../images/home/product-category/thucphamviet.png",
  },
  {
    title: "Sữa, Bơ",
    url: "../images/home/product-category/suabo.png",
  },
  {
    title: "Đông lạnh",
    url: "../images/home/product-category/donglanh.png",
  },
  {
    title: "Dầu ăn",
    url: "../images/home/product-category/dauan.png",
  },
  {
    title: "Gạo, mì, nông sản",
    url: "../images/home/product-category/gaominongsan.png",
  },
  {
    title: "Đồ hộp",
    url: "../images/home/product-category/dohop.png",
  },
  {
    title: "Bia, Đồ uống",
    url: "../images/home/product-category/biadouong.png",
  },
  {
    title: "Thực phẩm chay",
    url: "../images/home/product-category/thucphamchay.png",
  },
  {
    title: "Dành cho trẻ em",
    url: "../images/home/product-category/danhchotreem.png",
  },
  {
    title: "Bánh kẹo giỏ quà",
    url: "../images/home/product-category/banhkeogioqua.png",
  },
  {
    title: "Đồ ăn thú cưng",
    url: "../images/home/product-category/doanthucung.png",
  },
  {
    title: "Chăm sóc cá nhân",
    url: "../images/home/product-category/chamsoccanhan.png",
  },
  {
    title: "Chăm sóc nhà cửa",
    url: "../images/home/product-category/chamsocnhacua.png",
  },
];

const productCategoryList = document.querySelector(
  ".content_product-category-list"
);

const item_category = productCategories.map((item, index) => {
  return `<a
          href="#"
          class="content_product-category-item d-flex flex-column align-items-center justify-content-center"
        >
          <img
            class="img-fluid"
            src=${item.url}
            alt="img"
          />
          <p class="content_product-category-title">${item.title}</p>
        </a>`;
});
productCategoryList.innerHTML = item_category.join("");

/* Explore*/
const exploreItems = [
  {
    ann: {
      img_store: "../images/home/img-store/aan.png",
      img_product: [
        "../images/home/product-img/ann/ann-01.png",
        "../images/home/product-img/ann/ann-02.png",
        "../images/home/product-img/ann/ann-03.png",
      ],
    },
  },
  {
    topmarket: {
      img_store: "../images/home/img-store/topmarket.png",
      img_product: [
        "../images/home/product-img/topmarket/topmarket-01.png",
        "../images/home/product-img/topmarket/topmarket-02.png",
        "../images/home/product-img/topmarket/topmarket-03.png",
      ],
    },
  },
  {
    khanhha: {
      img_store: "../images/home/img-store/khanhha.png",
      img_product: [
        "../images/home/product-img/khanhha/khanhha-01.png",
        "../images/home/product-img/khanhha/khanhha-02.png",
        "../images/home/product-img/khanhha/khanhha-03.png",
      ],
    },
  },
  {
    dungha: {
      img_store: "../images/home/img-store/dungha.png",
      img_product: [
        "../images/home/product-img/dungha/dungha-01.png",
        "../images/home/product-img/dungha/dungha-02.png",
        "../images/home/product-img/dungha/dungha-03.png",
      ],
    },
  },
  {
    vkook: {
      img_store: "../images/home/img-store/vkook.png",
      img_product: [
        "../images/home/product-img/vkook/vkook-01.png",
        "../images/home/product-img/vkook/vkook-02.png",
        "../images/home/product-img/vkook/vkook-03.png",
      ],
    },
  },
  {
    vitot: {
      img_store: "../images/home/img-store/vitot.png",
      img_product: [
        "../images/home/product-img/vitot/vitot-01.png",
        "../images/home/product-img/vitot/vitot-02.png",
        "../images/home/product-img/vitot/vitot-03.png",
      ],
    },
  },
  {
    onggiaika: {
      img_store: "../images/home/img-store/onggiaika.png",
      img_product: [
        "../images/home/product-img/onggiaika/onggiaika-01.png",
        "../images/home/product-img/onggiaika/onggiaika-02.png",
        "../images/home/product-img/onggiaika/onggiaika-03.png",
      ],
    },
  },
  {
    nestle: {
      img_store: "../images/home/img-store/nestle.png",
      img_product: [
        "../images/home/product-img/nestle/nestle-01.png",
        "../images/home/product-img/nestle/nestle-02.png",
        "../images/home/product-img/nestle/nestle-03.png",
      ],
    },
  },
  {
    soibien: {
      img_store: "../images/home/img-store/soibien.png",
      img_product: [
        "../images/home/product-img/soibien/soibien-01.png",
        "../images/home/product-img/soibien/soibien-02.png",
        "../images/home/product-img/soibien/soibien-03.png",
      ],
    },
  },
];

const exploreItemContainer = document.querySelector(
  ".content_explore-list .row"
);

const explore_item = exploreItems.map((exploreItem, index) => {
  const storeKey = Object.keys(exploreItem);
  const storeData = exploreItem[storeKey];
  return `<div class="col-xl-4 col-sm-6">
                <div class="content_store-item d-flex flex-column">
                  <div class="content_store-header d-flex align-items-start">
                    <img
                      class="content_store-img"
                      src="${storeData.img_store}"
                      alt="img"
                    />
                    <div
                      class="content_store-heading d-flex flex-column justify-content-start"
                    >
                      <p class="content_store-name">
                        Ommani Mall Thạch Bàn Long
                      </p>
                      <div
                        class="content_store-rating d-flex align-items-center"
                      >
                        <i class="bi bi-star-fill"></i>
                        <p>4.8 (11k+)<span>TP.Hồ Chí Minh</span></p>
                      </div>
                      <div
                        class="content_store-brand d-flex align-items-center"
                      >
                        <img
                          class="img-fluid"
                          src="../images/home/badge-brand-img/iso.png"
                          alt="img-badge"
                        />
                        <img
                          class="img-fluid"
                          src="../images/home/badge-brand-img/fssc.png"
                          alt="img-badge"
                        />
                        <img
                          class="img-fluid"
                          src="../images/home/badge-brand-img/haccp.png"
                          alt="img-badge"
                        />
                        <img
                          class="img-fluid"
                          src="../images/home/badge-brand-img/gmp.png"
                          alt="img-badge"
                        />
                        <img
                          class="img-fluid"
                          src="../images/home/badge-brand-img/brcfood.png"
                          alt="img-badge"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="content_store-body">
                    ${storeData.img_product
                      .map((img, index) => {
                        return `<a
                      class="content_store-product"
                      href="#"
                    >
                      <img
                        class="img-fluid content_product-img"
                        src="${img}"
                        alt="product-img"
                      />
                      <div
                        class="content_product-info d-flex flex-column justify-content-start"
                      >
                        <p class="content_product-name mb-0" 
                          data-bs-toggle="tooltip" data-bs-placement="top"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="Xúc Xích Đức Việt gói 16 hông khói siêu ngon"
                        >
                          Xúc Xích Đức Việt gói 16 hông khói siêu ngon
                        </p>
                        <p class="content_product-sold mb-0">Đã bán 12</p>
                        <p class="content_product-price mb-0">
                          89.000 <u>đ</u>
                        </p>
                      </div> </a
                    >`;
                      })
                      .join("")}
                  </div>
                </div>
              </div>`;
});

exploreItemContainer.innerHTML = explore_item.join("");

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
