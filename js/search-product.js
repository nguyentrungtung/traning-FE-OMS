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

/* Product category list */
const productCategoryLists = [
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
const productCategoryList = document.querySelector(".product-category_list");

const item_category = productCategoryLists.map((item, index) => {
  return `<a
          href="#"
          class="item-category d-flex flex-column align-items-center justify-content-start"
        >
          <img
            class="img-fluid"
            src=${item.url}
            alt="img"
          />
          <p class="category-title">${item.title}</p>
        </a>`;
});
productCategoryList.innerHTML = item_category.join("");

const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
const productList = document.querySelector(".product-category_list");
const itemCategories = document.querySelectorAll(".item-category");

const scrollAmount = 100; // Adjust this value as needed

preBtn.addEventListener("click", function () {
  productList.scrollBy({
    top: 0,
    left: -scrollAmount,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", function () {
  productList.scrollBy({
    top: 0,
    left: scrollAmount,
    behavior: "smooth",
  });
});

/* List product */
const search_filter_products = [
  { img: "../images/search-product/img-01.png" },
  { img: "../images/search-product/img-02.png" },
  { img: "../images/search-product/img-03.png" },
  { img: "../images/search-product/img-04.png" },
  { img: "../images/search-product/img-05.png" },
  { img: "../images/search-product/img-06.png" },
  { img: "../images/search-product/img-07.png" },
  { img: "../images/search-product/img-08.png" },
  { img: "../images/search-product/img-09.png" },
  { img: "../images/search-product/img-10.png" },
  { img: "../images/search-product/img-11.png" },
  { img: "../images/search-product/img-12.png" },
  { img: "../images/search-product/img-13.png" },
  { img: "../images/search-product/img-14.png" },
  { img: "../images/search-product/img-15.png" },
  { img: "../images/search-product/img-16.png" },
  { img: "../images/search-product/img-17.png" },
  { img: "../images/search-product/img-18.png" },
  { img: "../images/search-product/img-19.png" },
  { img: "../images/search-product/img-20.png" },
  { img: "../images/search-product/img-21.png" },
  { img: "../images/search-product/img-22.png" },
  { img: "../images/search-product/img-23.png" },
  { img: "../images/search-product/img-24.png" },
  { img: "../images/search-product/img-25.png" },
];

const list_products_block = document.querySelector(".get-list-product");
const key_search = document.querySelector(".search-results_title > span");
const paginationBar = document.querySelector(".pagination_list-product");

const product_html = search_filter_products
  .map((product, index) => {
    return `<div class="col-o-2 col-lg-3 col-md-4 col-6">
                          <div class="search-results_product-item bg-white">
                            <div
                              class="product-item_images-wrapper position-relative"
                            >
                              <img
                                class="img-fluid"
                                style="width: 100%"
                                src=${product.img}
                                alt="img-product"
                              />
                              <div
                                class="product-item_badge-brand d-flex position-absolute"
                              >
                                <span>Mall</span>
                                <img
                                  src="../images/search-product/badge-brand/iso.png"
                                  alt="badge-img"
                                />
                                <img
                                  src="../images/search-product/badge-brand/fssc.png"
                                  alt="badge-img"
                                />
                                <img
                                  src="../images/search-product/badge-brand/haccp.png"
                                  alt="badge-img"
                                />
                              </div>
                              <div
                                class="product-item_discount position-absolute"
                              >
                                <span>14%</span>
                              </div>
                              <div
                                class="product-item_tags position-absolute d-flex align-items-center"
                              >
                                <span>7.7</span>
                                <p class="text-uppercase">Ommani freeship+</p>
                              </div>
                            </div>
                            <div
                              class="product-item_details d-flex flex-column"
                            >
                              <p class="product-item_title">
                                Bông cải xanh 100g nội địa Nhật Bản và tự nhiên
                                100%
                              </p>
                              <div
                                class="product-item_info d-flex flex-column"
                              >
                                <div
                                  class="d-flex align-items-center justify-content-between"
                                >
                                  <p class="product-item_price">
                                    87.000
                                    <span style="text-decoration: underline"
                                      >đ</span
                                    >
                                  </p>

                                  <svg
                                    width="17"
                                    height="12"
                                    viewBox="0 0 17 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.7685 7.94694H15.3652V5.61678C15.3652 5.34303 15.2367 5.08005 15.0098 4.88605L12.492 2.73264C12.2652 2.53864 11.9577 2.42871 11.6376 2.42871H10.5261V1.39404C10.5261 0.82282 9.98427 0.359375 9.31637 0.359375H2.86429C2.1964 0.359375 1.65452 0.82282 1.65452 1.39404V2.42871H0.243132C0.132236 2.42871 0.0415039 2.50631 0.0415039 2.60116V2.94604C0.0415039 3.04089 0.132236 3.11849 0.243132 3.11849H7.09847C7.20937 3.11849 7.3001 3.19609 7.3001 3.29093V3.63582C7.3001 3.73067 7.20937 3.80827 7.09847 3.80827H1.04964C0.938747 3.80827 0.848014 3.88587 0.848014 3.98071V4.3256C0.848014 4.42045 0.938747 4.49805 1.04964 4.49805H6.29196C6.40285 4.49805 6.49359 4.57565 6.49359 4.67049V5.01538C6.49359 5.11023 6.40285 5.18783 6.29196 5.18783H0.243132C0.132236 5.18783 0.0415039 5.26543 0.0415039 5.36027V5.70516C0.0415039 5.8 0.132236 5.8776 0.243132 5.8776H5.48545C5.59634 5.8776 5.68708 5.9552 5.68708 6.05005V6.39494C5.68708 6.48978 5.59634 6.56738 5.48545 6.56738H1.65452V9.3265C1.65452 10.4689 2.73827 11.3958 4.07406 11.3958C5.40984 11.3958 6.49359 10.4689 6.49359 9.3265H9.71963C9.71963 10.4689 10.8034 11.3958 12.1392 11.3958C13.4749 11.3958 14.5587 10.4689 14.5587 9.3265H15.7685C15.9902 9.3265 16.1717 9.1713 16.1717 8.98161V8.29183C16.1717 8.10214 15.9902 7.94694 15.7685 7.94694ZM4.07406 10.3612C3.40616 10.3612 2.86429 9.89772 2.86429 9.3265C2.86429 8.75527 3.40616 8.29183 4.07406 8.29183C4.74195 8.29183 5.28382 8.75527 5.28382 9.3265C5.28382 9.89772 4.74195 10.3612 4.07406 10.3612ZM12.1392 10.3612C11.4713 10.3612 10.9294 9.89772 10.9294 9.3265C10.9294 8.75527 11.4713 8.29183 12.1392 8.29183C12.8071 8.29183 13.3489 8.75527 13.3489 9.3265C13.3489 9.89772 12.8071 10.3612 12.1392 10.3612ZM14.1554 5.8776H10.5261V3.46338H11.6376L14.1554 5.61678V5.8776Z"
                                      fill="#28BBA2"
                                    />
                                  </svg>
                                </div>
                                <div
                                  class="d-flex align-items-center"
                                  style="gap: 6px"
                                >
                                  <span class="product-item_stars">
                                    &#9733;&#9733;&#9733;&#9733;&#9733;
                                  </span>
                                  <span class="line-space"></span>
                                  <p class="product-item_sold">1.6k đã bán</p>
                                </div>
                              </div>
                              <div class="product-item_location">
                                <p>TP. Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>`;
  })
  .join("");

const no_product_html = `<div
                          class="no-product d-flex align-items-center justify-content-center flex-column"
                          style="
                            height: 390px;
                            background-color: white;
                            gap: 24px;
                            border-radius: 16px;
                          "
                        >
                          <img
                            src="../images/search-product/icon/search-empty-icon.svg"
                            alt=""
                          />
                          <p
                            style="
                              font-size: 20px;
                              font-weight: 400;
                              line-height: 20px;
                              text-align: center;
                              color: #888888;
                            "
                          >
                            Không có sản phẩm phù hợp với nội dung tìm kiếm
                          </p>
                        </div>`;

if (key_search.textContent === "Trai cay") {
  list_products_block.innerHTML = product_html;
  list_products_block.classList.remove("gx-0");

  let isFirst = true;
  itemCategories.forEach((item) => {
    if (isFirst) {
      item.classList.add("item-search__active");
      isFirst = false;
    }
  });
} else if (key_search.textContent === "Xe hoi") {
  list_products_block.innerHTML = no_product_html;
  list_products_block.classList.add("gx-0");
  list_products_block.classList.remove("custom-gutter");
  if (paginationBar) {
    paginationBar.style.cssText = "display: none !important;";
  }
}

/* filter */
const btn_filter_tablet = document.querySelector(".btn_filter-tablet");
const filter_block = document.querySelector(".filter-mobile");
const overlay = document.querySelector(".overlay");
const btnHandleFilterIcon = document.querySelector(
  ".search-filter_title > button > i.bi-funnel"
);
const btnHandleXIcon = document.querySelector(
  ".search-filter_title > button > i.bi-x-lg"
);
function on() {
  overlay.style.display = "block";
  filter_block.style.right = "0%";
  btnHandleFilterIcon.style.display = "none";
  btnHandleXIcon.style.display = "block";
  document.body.classList.add("no-scroll");
}

function off() {
  overlay.style.display = "none";
  filter_block.style.right = "-70%";
  document.body.classList.remove("no-scroll");
}

/*tab*/
const noProductText = document.querySelector(".no-product > p");
const btn_tabs = document.querySelectorAll(".search-results_sort-button");
const all_contents = document.querySelectorAll(".filter_product");
btn_tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    btn_tabs.forEach((tab) =>
      tab.classList.remove("search-results_sort-button--active")
    );
    tab.classList.add("search-results_sort-button--active");

    all_content.forEach((content) => {
      content.classList.remove("show");
    });
    all_content[index].classList.add("show");

    const pagination = document.querySelector(".pagination_list-product");
    pagination.style.cssText = `display: flex !important;`;

    if (index === 2) {
      pagination.style.cssText = `display: none !important;`;
      all_contents[2].style.marginTop = "7px";
      all_contents[2].style.borderRadius = "16px";
      all_contents[2].style.height = "390px";
      all_contents[2].style.backgroundColor = "white";
      noProductText.style.cssText = `margin-top: 24px;
                                      font-size: 20px;
                                     font-weight: 400;
                                    line-height: 20px;
                                   text-align: center;
                                   color: #888888;`;
    }
  });
});

/*tab product mobile*/
const tabs = document.querySelectorAll(".sort-filter");
const all_content = document.querySelectorAll(".filter_product");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    var line = document.querySelector(".sort-line");
    const pElement = tab.querySelector("p");
    if (pElement) {
      // Lấy kích thước và vị trí của thẻ <p>
      line.style.width = pElement.offsetWidth + "px";
      line.style.left = pElement.offsetLeft + "px";
    } else {
      // Nếu không có thẻ <p>, dùng toàn bộ tab
      line.style.width = tab.offsetWidth + "px";
      line.style.left = tab.offsetLeft + "px";
    }

    all_content.forEach((content) => {
      content.classList.remove("show");
    });
    all_content[index].classList.add("show");

    const bg = document.querySelector(".body-block_x-gutter");
    bg.style.height = "100%";
    bg.style.backgroundColor = "initial";
    if (index === 2) {
      all_content[2].style.marginTop = "179px";
      bg.style.height = "100vh";
      bg.style.backgroundColor = "white";
      noProductText.style.cssText = `margin-top: 24px;
                          font-size: 16px;
                          font-weight: 400;
                          line-height: 24.5px;
                          text-align: center;
                          color: #888888;
                          width: 60%;`;
    }
  });
});
