//* Toggle Search Input Header
const searchHeader = document.querySelector(".header__searchinput-searchbox");
const toggleSearchHeader = document.querySelector(
  ".header__searchinput-searchbox-toggle"
);
const headerSearchInput = document.querySelector(".header__searchinput");

searchHeader.addEventListener("click", (e) => {
  toggleSearchHeader.classList.toggle("acitve-search");
  e.stopPropagation();
});

window.addEventListener("click", () => {
  if (toggleSearchHeader.classList.contains("acitve-search")) {
    toggleSearchHeader.classList.remove("acitve-search");
  }
});

//* Toggle SearchInput DropDown
const header__searchinputDropdown = document.querySelector(
  ".header__searchinput-dropdown"
);
const searchDropTitle = document.querySelector(
  ".header__searchinput-dropdown .search-drop-title"
);

const toggleSearchinputDropdown = document.querySelector(
  ".header__searchinput-dropdown-toggle"
);
const myDropdownItems = toggleSearchinputDropdown.querySelectorAll("li");

header__searchinputDropdown.addEventListener("click", (e) => {
  toggleSearchinputDropdown.classList.toggle("active-searchinput-dropdown");

  e.stopPropagation();
});

window.addEventListener("click", () => {
  if (
    toggleSearchinputDropdown.classList.contains("active-searchinput-dropdown")
  ) {
    toggleSearchinputDropdown.classList.remove("acitve-search");
  }
});

myDropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedValue = this.getAttribute("data-value");
    searchDropTitle.textContent = selectedValue;
    toggleSearchinputDropdown.classList.remove("active-searchinput-dropdown");
  });
});

//* Toggle Cart
const iconcartToggle = document.getElementById("icon-cart-toggle");
const iconCartDropdown = document.querySelector(".icon-cart--dropdown");
console.log(iconCartDropdown);
const iconcartToggleMb = document.getElementById("close-cart-mb");

iconcartToggle.addEventListener("click", (e) => {
  iconCartDropdown.classList.toggle("icon-cart-active");

  e.stopPropagation();
});
window.addEventListener("click", () => {
  if (iconCartDropdown.classList.contains("icon-cart-active")) {
    iconCartDropdown.classList.remove("icon-cart-active");
  }
});
iconcartToggleMb.addEventListener("click", () => {
  iconCartDropdown.classList.remove("icon-cart-active");
});

//*Toggle Accout Settings
const toggleIconAccount = document.querySelector(
  ".header__site-icon .icon-account"
);
const accountSettingDropdown = document.querySelector(
  ".header__site-icon .icon-account .account-settings-dropdown"
);

toggleIconAccount.addEventListener("click", (e) => {
  accountSettingDropdown.classList.toggle("active-searchinput-dropdown");

  e.stopPropagation();
});
window.addEventListener("click", () => {
  if (
    accountSettingDropdown.classList.contains("active-searchinput-dropdown")
  ) {
    accountSettingDropdown.classList.remove("active-searchinput-dropdown");
  }
});

//* Toggle Login Mb
const toggleIconCartAccount = document.querySelector(".icon-account-mb");
const modalLoginMb = document.querySelector(".modal__loginmb");
console.log(modalLoginMb);
const closeLoginMb = document.querySelector(".modal__loginmb .btn-back");

toggleIconCartAccount.addEventListener("click", () => {
  modalLoginMb.classList.add("modal__loginmb-active");
  console.log("click");
});

closeLoginMb.addEventListener("click", () => {
  modalLoginMb.classList.remove("modal__loginmb-active");
  console.log("click");
});
