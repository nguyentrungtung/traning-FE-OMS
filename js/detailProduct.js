//*Toggle To See More Detail Product On Mobile Device
const toggleSeeMoreDetailTitle = document.getElementById(
  "seeMoreDetailTitleProduct"
);
const detailTitleProduct = document.getElementById("detail-product");

toggleSeeMoreDetailTitle.addEventListener("click", () => {
  detailTitleProduct.classList.toggle("toggleSeeMore");
});
