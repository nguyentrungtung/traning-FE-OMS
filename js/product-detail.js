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

/* Product gallery*/

const thumbnailsContainer = document.querySelector(
  ".product-gallery_thumbnails"
);
const thumbnails = document.querySelectorAll(".product-gallery_thumbnail");
const mainImage = document.getElementById("mainImage");
const preBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
let currentImageIndex = 0;

const mainImageContainer = document.querySelector(
  ".product-gallery_image-block"
);
const reviewContainer = document.querySelector(".product-gallery_review");

// Thêm biến zoomFactor để điều chỉnh mức độ zoom
const zoomFactor = 1.2;

// Thêm phần tử ô vuông để làm vùng hiển thị màu sắc
const zoomArea = document.querySelector(".product-gallery_zoom-area");

function updateMainImage(index) {
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("selected");
  });

  const selectedThumbnail = thumbnails[index];
  selectedThumbnail.classList.add("selected");

  const imgSrc = selectedThumbnail.querySelector("img").src;
  mainImage.src = imgSrc;

  const thumbnailWidth = selectedThumbnail.offsetWidth;
  const scrollLeftOffset =
    selectedThumbnail.offsetLeft - thumbnailsContainer.offsetLeft;

  thumbnailsContainer.scrollTo({
    left: scrollLeftOffset,
    behavior: "smooth",
  });
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    updateMainImage(index);
  });
});

preBtn.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex > 0 ? currentImageIndex - 1 : thumbnails.length - 1;
  updateMainImage(currentImageIndex);
});

nextBtn.addEventListener("click", () => {
  currentImageIndex =
    currentImageIndex < thumbnails.length - 1 ? currentImageIndex + 1 : 0;
  updateMainImage(currentImageIndex);
});

thumbnails[0].classList.add("selected");

function handleZoom(event) {
  if (window.innerWidth >= 1024) {
    const boundingRect = mainImage.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;

    const scaleX = mainImage.naturalWidth / mainImage.offsetWidth;
    const scaleY = mainImage.naturalHeight / mainImage.offsetHeight;

    const zoomAreaSize = zoomArea.offsetWidth;
    const zoomX = offsetX - zoomAreaSize / 2;
    const zoomY = offsetY - zoomAreaSize / 2;

    // Giới hạn zoomArea trong ảnh chính
    const limitedX = Math.max(
      0,
      Math.min(zoomX, boundingRect.width - zoomAreaSize)
    );
    const limitedY = Math.max(
      0,
      Math.min(zoomY, boundingRect.height - zoomAreaSize)
    );

    zoomArea.style.left = `${limitedX}px`;
    zoomArea.style.top = `${limitedY}px`;

    const bgPosX = Math.max(
      Math.min(
        -offsetX * scaleX * zoomFactor + reviewContainer.offsetWidth / 2,
        0
      ),
      -mainImage.naturalWidth * zoomFactor + reviewContainer.offsetWidth
    );
    const bgPosY = Math.max(
      Math.min(
        -offsetY * scaleY * zoomFactor + reviewContainer.offsetHeight / 2,
        0
      ),
      -mainImage.naturalHeight * zoomFactor + reviewContainer.offsetHeight
    );

    reviewContainer.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;

    // Cập nhật vị trí nền của zoomArea
    zoomArea.style.backgroundImage = `url('${mainImage.src}')`;
    zoomArea.style.backgroundSize = `${mainImage.naturalWidth}px ${mainImage.naturalHeight}px`;
    zoomArea.style.backgroundPosition = `-${limitedX * scaleX}px -${
      limitedY * scaleY
    }px`;
  }
}

mainImageContainer.addEventListener("mouseenter", function () {
  if (window.innerWidth >= 1024) {
    reviewContainer.style.backgroundImage = `url('${mainImage.src}')`;
    reviewContainer.style.backgroundSize = `${
      mainImage.naturalWidth * zoomFactor
    }px ${mainImage.naturalHeight * zoomFactor}px`;
    reviewContainer.style.display = "block";
    zoomArea.style.display = "block";
    mainImage.classList.add("grayscale");
  }
});

mainImageContainer.addEventListener("mouseleave", function () {
  reviewContainer.style.display = "none";
  zoomArea.style.display = "none";
  mainImage.classList.remove("grayscale");
});

mainImageContainer.addEventListener("mousemove", handleZoom);

/* Tab desc, rating, question*/
const tabs = document.querySelectorAll(".overview_tab-btn");
const all_content = document.querySelectorAll(".overview_content");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    var line = document.querySelector(".under-line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    all_content.forEach((content) => {
      content.classList.remove("show");
    });
    all_content[index].classList.add("show");
  });
});

/* Related products*/
const related_products = [
  { img: "../images/product-detail/related-products/img-01.png" },
  { img: "../images/product-detail/related-products/img-02.png" },
  { img: "../images/product-detail/related-products/img-03.png" },
  { img: "../images/product-detail/related-products/img-04.png" },
  { img: "../images/product-detail/related-products/img-05.png" },
  { img: "../images/product-detail/related-products/img-06.png" },
];
const related_products_list = document.querySelector(".get-related-products");

const product_html = related_products
  .map((product, index) => {
    return `<div class="col-xl-2 col-lg-3 col-md-4">
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
                              src="../images/product-detail/badge-brand/iso.png"
                              alt="badge-img"
                            />
                            <img
                              src="../images/product-detail/badge-brand/fssc.png"
                              alt="badge-img"
                            />
                            <img
                              src="../images/product-detail/badge-brand/haccp.png"
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
                                src="../images/product-detail/icon/transport.svg"
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

related_products_list.innerHTML = product_html;

/* Show more desc*/
const btnShow = document.querySelector(".description_button-show");

btnShow.addEventListener("click", () => {
  var isExpanded = btnShow.getAttribute("aria-expanded");
  if (isExpanded === "true") {
    btnShow.innerHTML = 'Rút gọn &nbsp;<i class="bi bi-chevron-up"></i>';
  } else if (isExpanded === "false") {
    btnShow.innerHTML = 'Xem thêm &nbsp;<i class="bi bi-chevron-down"></i>';
  }
});

/* toggle class collapse*/
function handleResize() {
  const element = document.getElementById("collapseDescText");
  if (window.innerWidth >= 768) {
    element.classList.remove("collapse");
  } else {
    element.classList.add("collapse");
  }
}

// Initial check
handleResize();

// Listen for window resize events
window.addEventListener("resize", handleResize);
