const toggleSeeMoreDetailTitle = document.getElementById(
  "seeMoreDetailTitleProduct"
);
const detailTitleProduct = document.getElementById("detail-product");
console.log("check =", detailTitleProduct);

toggleSeeMoreDetailTitle.addEventListener("click", () => {
  detailTitleProduct.classList.toggle("toggleSeeMore");
});
