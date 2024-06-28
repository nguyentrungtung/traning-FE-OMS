document.addEventListener("DOMContentLoaded", () => {
  //*Toggle Cart Modal
  const toggleBtnCart = document.getElementById("toggleCart");
  const toggleCartContent = document.querySelector(".cart-icon__list");
  const closeCart = document.getElementById("closeCart");
  toggleBtnCart.addEventListener("click", (e) => {
    toggleCartContent.classList.toggle("active-cart");
    e.stopPropagation();
  });

  closeCart.addEventListener("click", () => {
    toggleCartContent.classList.remove("active-cart");
  });

  window.addEventListener("click", () => {
    if (toggleCartContent.classList.contains("active-cart")) {
      toggleCartContent.classList.remove("active-cart");
    }
  });

  toggleCartContent.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện click trong div tiếp tục lan truyền lên window
  });

  //* Toggle Search Header
  const toggleSearchHeader = document.getElementById("toggleSearchHeader");
  const searchHeaderDropDown = document.querySelector(".dropdown-search");
  const headerSearchInput = document.querySelector(
    ".header-container__bottom .search-input .top"
  );

  toggleSearchHeader.addEventListener("click", (e) => {
    searchHeaderDropDown.classList.toggle("acitve-search");

    e.stopPropagation();
  });
  window.addEventListener("click", () => {
    if (searchHeaderDropDown.classList.contains("acitve-search")) {
      searchHeaderDropDown.classList.remove("acitve-search");
    }
  });

  searchHeaderDropDown.addEventListener("click", (event) => {
    event.stopPropagation(); // Ngăn sự kiện click trong div tiếp tục lan truyền lên window
  });
});

//* Toggle Modal Login Mobile
const toggleLoginMb = document.querySelector(
  ".header-container__bottom .account .acc"
);
const modalLoginMb = document.querySelector(".modal-loginmb");
const closeLoginMb = document.querySelector(".modal-loginmb .back");

toggleLoginMb.addEventListener("click", () => {
  modalLoginMb.classList.add("active-modal-loginmb");
});

closeLoginMb.addEventListener("click", () => {
  modalLoginMb.classList.remove("active-modal-loginmb");
});

//* Toggle Filter
const toggleFilterMb = document.querySelector(".filterPopup");
const modalFilter = document.querySelector(
  ".filter-categories__container .col-filter"
);
const closemodalFilter = document.querySelector(".close-filterMb");

toggleFilterMb.addEventListener("click", () => {
  modalFilter.classList.add("active-modal-filter");
  document.body.classList.add("modal-scroll-lock");
});

closemodalFilter.addEventListener("click", () => {
  modalFilter.classList.remove("active-modal-filter");
  document.body.classList.remove("modal-scroll-lock");
});

//*Header Fixed Scroll
window.addEventListener("scroll", () => {
  const headerMb = document.querySelector(".header-filterMb");
  const headerheight = headerMb.offsetHeight;

  if (window.scrollY > headerheight) {
    headerMb.classList.add("headerMb-Fixed");
  } else {
    headerMb.classList.remove("headerMb-Fixed");
  }
});
