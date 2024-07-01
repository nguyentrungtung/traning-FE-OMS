const outstandingData = [
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-01.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-02.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-03.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-04.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-05.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-06.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-07.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-08.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-09.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-10.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-11.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-12.jpg",
  },
  {
    name: "Dừa xiêm sọ size L (600-900g)",
    img: "../images//store-details/outstanding-product/out-13.jpg",
  },
];

const products_store = [
  { img: "../images/search-filter-product/img-01.png" },
  { img: "../images/search-filter-product/img-02.png" },
  { img: "../images/search-filter-product/img-03.png" },
  { img: "../images/search-filter-product/img-04.png" },
  { img: "../images/search-filter-product/img-05.png" },
  { img: "../images/search-filter-product/img-06.png" },
  { img: "../images/search-filter-product/img-07.png" },
  { img: "../images/search-filter-product/img-08.png" },
];

const search_filter_products = [
  { img: "../images/search-filter-product/img-01.png" },
  { img: "../images/search-filter-product/img-02.png" },
  { img: "../images/search-filter-product/img-03.png" },
  { img: "../images/search-filter-product/img-04.png" },
  { img: "../images/search-filter-product/img-05.png" },
  { img: "../images/search-filter-product/img-06.png" },
  { img: "../images/search-filter-product/img-07.png" },
  { img: "../images/search-filter-product/img-08.png" },
  { img: "../images/search-filter-product/img-09.png" },
  { img: "../images/search-filter-product/img-10.png" },
  { img: "../images/search-filter-product/img-11.png" },
  { img: "../images/search-filter-product/img-12.png" },
  { img: "../images/search-filter-product/img-13.png" },
  { img: "../images/search-filter-product/img-14.png" },
  { img: "../images/search-filter-product/img-15.png" },
  { img: "../images/search-filter-product/img-16.png" },
  { img: "../images/search-filter-product/img-17.png" },
  { img: "../images/search-filter-product/img-18.png" },
  { img: "../images/search-filter-product/img-19.png" },
  { img: "../images/search-filter-product/img-20.png" },
  { img: "../images/search-filter-product/img-21.png" },
  { img: "../images/search-filter-product/img-22.png" },
  { img: "../images/search-filter-product/img-23.png" },
  { img: "../images/search-filter-product/img-24.png" },
  { img: "../images/search-filter-product/img-25.png" },
];

const outstandingListProducts = document.querySelector(
  ".outstanding__list-product"
);

const outstandingProduct_html = outstandingData
  .map((outstandingProduct, index) => {
    return `<a href="#" class="outstanding-product">
    <div class="outstanding-product__discount">14%</div>
                      <div class="outstanding-product__image">
                        <img
                          src=${outstandingProduct.img}
                          alt="img-out-product"
                        />
                      </div>
                      <div class="outstanding-product__info d-flex flex-column">
                        <p class="outstanding-product__name">
                          ${outstandingProduct.name}
                        </p>
                        <p class="outstanding-product__price">
                          132.000 <u>đ</u>
                        </p>
                        <div
                          class="outstanding-product__expiry-sale progress"
                          role="progressbar"
                          aria-label="Basic example"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <p class="outstanding-product__sale-status">
                            Vừa mở bán
                          </p>
                          <div class="progress-bar" style="width: 25%"></div>
                        </div>
                      </div>
                    </a>`;
  })
  .join("");
outstandingListProducts.innerHTML = outstandingProduct_html;

const sliderCertify = document.querySelector(".outstanding__list-product");
const sliderFarm = document.querySelector(".outstanding-product");
const imgs = document.querySelectorAll(".outstanding-product__image img");

imgs.forEach((img) => {
  img.setAttribute("draggable", "false");
});

let isDown = false;
let startX;
let scrollLeft;

sliderCertify.addEventListener("mousedown", (e) => {
  isDown = true;
  sliderCertify.classList.add("active");
  startX = e.pageX - sliderCertify.offsetLeft;
  scrollLeft = sliderCertify.scrollLeft;
});

sliderCertify.addEventListener("mouseleave", () => {
  isDown = false;
  sliderCertify.classList.remove("active");
});

sliderCertify.addEventListener("mouseup", () => {
  isDown = false;
  sliderCertify.classList.remove("active");
});

sliderCertify.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderCertify.offsetLeft;
  const walk = (x - startX) * 2; // Tốc độ cuộn
  sliderCertify.scrollLeft = scrollLeft - walk;
});

// Cho phép cuộn bằng bánh xe chuột
sliderCertify.addEventListener("wheel", (e) => {
  e.preventDefault();
  sliderCertify.scrollLeft += e.deltaY; // Cuộn ngang thay vì cuộn dọc
});

const products__list = document.querySelector(
  ".products__list-product .get-list-products"
);

const products__list_02 = document.querySelector(
  ".products__list-product .get-list-products-02"
);

const product_html = products_store
  .map((product, index) => {
    return `
    <div class="col-xl-3 col-lg-4 col-md-6 col-6">
  <div class="store__product-item bg-white">
    <div class="product-item__images-wrapper position-relative">
      <img
        class="img-fluid"
        style="width: 100%"
        src="${product.img}"
        alt="img-product"
      />
      <div class="product-item__badge-brand d-flex position-absolute">
        <span>Mall</span>
        <img
          src="../images/search-filter-product/badge-brand/iso.png"
          alt="badge-img"
        />
        <img
          src="../images/search-filter-product/badge-brand/fssc.png"
          alt="badge-img"
        />
        <img
          src="../images/search-filter-product/badge-brand/haccp.png"
          alt="badge-img"
        />
      </div>
      <div class="product-item__discount position-absolute">
        <span>14%</span>
      </div>
      <div
        class="product-item__tags position-absolute d-flex align-items-center"
      >
        <span>7.7</span>
        <p class="text-uppercase">Ommani freeship+</p>
      </div>
    </div>
    <div class="product-item__details d-flex flex-column">
      <p class="product-item__title">
        Bông cải xanh 100g nội địa Nhật Bản và tự nhiên 100%
      </p>
      <div class="product-item__info d-flex flex-column">
        <div class="d-flex align-items-center justify-content-between">
          <p class="product-item__price">
            87.000
            <span style="text-decoration: underline">đ</span>
          </p>

          <img
            src="../images/search-filter-product/icon/transport.svg"
            alt="icon-trans"
          />
        </div>
        <div class="d-flex align-items-center" style="gap: 6px">
          <span class="product-item__stars">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </span>
          <span class="line-space"></span>
          <p class="product-item__sold">1.6k đã bán</p>
        </div>
      </div>
      <div class="product-item__location">
        <p>TP. Hồ Chí Minh</p>
      </div>
    </div>
  </div>
</div>
`;
  })
  .join("");

products__list.innerHTML = product_html;
products__list_02.innerHTML = product_html;

const btnCategories = document.querySelectorAll(".button-category");
const allContentCategory = document.querySelectorAll(".content-block");
btnCategories.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    btnCategories.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    var tooltip = document.querySelector(".tooltip-line");
    tooltip.style.left = e.target.offsetLeft + e.target.offsetWidth / 2 + "px";
    // const offsetX = -(e.target.offsetLeft + e.target.offsetWidth / 2);
    // tooltip.style.transform = `translateX(${offsetX}px)`;

    allContentCategory.forEach((content) => {
      content.classList.remove("show");
    });
    allContentCategory[index].classList.add("show");
  });
});

const list_sort_products = document.querySelector(".get-list__sort-product");

const sort_product_html = search_filter_products
  .map((product, index) => {
    return `<div class="col-l-o-2">
                          <div class="search-results__product-item bg-white">
                            <div
                              class="product-item__images-wrapper position-relative"
                            >
                              <img
                                class="img-fluid"
                                style="width: 100%"
                                src=${product.img}
                                alt="img-product"
                              />
                              <div
                                class="product-item__badge-brand d-flex position-absolute"
                              >
                                <span>Mall</span>
                                <img
                                  src="../images/search-filter-product/badge-brand/iso.png"
                                  alt="badge-img"
                                />
                                <img
                                  src="../images/search-filter-product/badge-brand/fssc.png"
                                  alt="badge-img"
                                />
                                <img
                                  src="../images/search-filter-product/badge-brand/haccp.png"
                                  alt="badge-img"
                                />
                              </div>
                              <div
                                class="product-item__discount position-absolute"
                              >
                                <span>14%</span>
                              </div>
                              <div
                                class="product-item__tags position-absolute d-flex align-items-center"
                              >
                                <span>7.7</span>
                                <p class="text-uppercase">Ommani freeship+</p>
                              </div>
                            </div>
                            <div
                              class="product-item__details d-flex flex-column"
                            >
                              <p class="product-item__title">
                                Bông cải xanh 100g nội địa Nhật Bản và tự nhiên
                                100%
                              </p>
                              <div
                                class="product-item__info d-flex flex-column"
                              >
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <p class="product-item__price">
                                    87.000
                                    <span style="text-decoration: underline"
                                      >đ</span
                                    >
                                  </p>

                                  <img
                                    src="../images/search-filter-product/icon/transport.svg"
                                    alt="icon-trans"
                                  />
                                </div>
                                <div
                                  class="d-flex align-items-center"
                                  style="gap: 6px"
                                >
                                  <span class="product-item__stars">
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  <span class="line-space"></span>
                                  <p class="product-item__sold">1.6k đã bán</p>
                                </div>
                              </div>
                              <div class="product-item__location">
                                <p>TP. Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>`;
  })
  .join("");

list_sort_products.innerHTML = sort_product_html;
