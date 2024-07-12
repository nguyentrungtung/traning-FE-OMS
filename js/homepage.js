//* Section Meilgo
const meilgoList = [
  {
    id: 1,
    name: "Ommani Mall",
    img: "../images/Mục_06.svg",
  },
  {
    id: 2,
    name: "Đi Chợ",
    img: "../images/Mục_05.svg",
  },
  {
    id: 3,
    name: "Bán Sỉ",
    img: "../images/Mục_04.svg",
  },
  {
    id: 4,
    name: "Bán Drop",
    img: "../images/Mục_03.svg",
  },
  {
    id: 5,
    name: "Bán Quốc Tế",
    img: "../images/Mục_02.svg",
  },
  {
    id: 6,
    name: "OCOP",
    img: "../images/Mục_01.svg",
  },
  {
    id: 7,
    name: "Chứng Nhận",
    img: "../images/Mục_07.svg",
  },
];
const meilGoContainer = document.querySelector(".meilgo__container-list");
const meilGoListItems = meilgoList.map((item, index) => {
  return `
       <li class="list__items d-flex align-items-center justify-content-center flex-column">
            <p class="list__items-img">
                <img src=${item.img} alt="">
            </p>
            <span class="list__items-text">${item.name}</span>
        </li> 
    `;
});
meilGoContainer.innerHTML = meilGoListItems.join("");

//* Section Categories
const categoriesList = [
  {
    id: 1,
    name: "Trái Cây",
    img: "../images/fruit_1.png",
  },
  {
    id: 2,
    name: "Thịt Trứng",
    img: "../images/fruit_2.png",
  },
  {
    id: 3,
    name: "Cá, Thủy Hải Sản",
    img: "../images/fruit_3.png",
  },
  {
    id: 4,
    name: "Rau Củ",
    img: "../images/fruit_4.png",
  },
  {
    id: 5,
    name: "Thực Phẩm Việt",
    img: "../images/fruit_5.png",
  },
  {
    id: 6,
    name: "Sữa, Bơ",
    img: "../images/fruit_6.png",
  },
  {
    id: 7,
    name: "Đông Lạnh",
    img: "../images/fruit_7.png",
  },
  {
    id: 8,
    name: "Dầu Ăn",
    img: "../images/fruit_8.png",
  },
  {
    id: 9,
    name: "Gạo Mì Sống",
    img: "../images/fruit_9.png",
  },
  {
    id: 10,
    name: "Đồ Hộp",
    img: "../images/fruit_10.png",
  },
  {
    id: 11,
    name: "Bia, Đồ Uống",
    img: "../images/fruit_11.png",
  },
  {
    id: 12,
    name: "Thực Phẩm Chay",
    img: "../images/fruit_12.png",
  },
  {
    id: 13,
    name: "Dành Cho Trẻ Em",
    img: "../images/fruit_13.png",
  },
  {
    id: 14,
    name: "Bánh Kẹo Giỏ Quà",
    img: "../images/fruit_14.png",
  },
  {
    id: 15,
    name: "Đồ Ăn Thú Cưng",
    img: "../images/fruit_15.png",
  },
  {
    id: 16,
    name: "Chăm Sóc Cá Nhân",
    img: "../images/fruit_16.png",
  },
  {
    id: 17,
    name: "Chăm Sóc Nhà Cửa",
    img: "../images/fruit_17.png",
  },
];
const categoriesListHome = document.querySelector(".categories__list");

const categoriesListHomeItems = categoriesList.map((item, index) => {
  return `
        <div class="categories__list-item d-flex align-items-center flex-column">
            <img src=${item.img} alt="">
            <p title=${item.name}>${item.name}</p>
        </div>
    `;
});

categoriesListHome.innerHTML = categoriesListHomeItems.join("");

//* Section More
const moreList = [
  {
    logoImg: "../images/legitstore_1.png",
    listImg: [
      "../images/img_product_1.png",
      "../images/img_product_2.png",
      "../images/img_product_3.png",
    ],
  },
  {
    logoImg: "../images/legitstore_2.png",
    listImg: [
      "../images/img_product_4.png",
      "../images/img_product_5.png",
      "../images/img_product_6.png",
    ],
  },
  {
    logoImg: "../images/legitstore_3.png",
    listImg: [
      "../images/img_product_7.png",
      "../images/img_product_8.png",
      "../images/img_product_9.png",
    ],
  },
  {
    logoImg: "../images/legitstore_4.png",
    listImg: [
      "../images/img_product_10.png",
      "../images/img_product_11.png",
      "../images/img_product_12.png",
    ],
  },
  {
    logoImg: "../images/legitstore_5.png",
    listImg: [
      "../images/img_product_13.png",
      "../images/img_product_14.png",
      "../images/img_product_15.png",
    ],
  },
  {
    logoImg: "../images/legitstore_6.png",
    listImg: [
      "../images/img_product_16.png",
      "../images/img_product_17.png",
      "../images/img_product_18.png",
    ],
  },
  {
    logoImg: "../images/legitstore_7.png",
    listImg: [
      "../images/img_product_19.png",
      "../images/img_product_20.png",
      "../images/img_product_21.png",
    ],
  },
  {
    logoImg: "../images/legitstore_8.png",
    listImg: [
      "../images/img_product_22.png",
      "../images/img_product_23.png",
      "../images/img_product_24.png",
    ],
  },
  {
    logoImg: "../images/legitstore_9.png",
    listImg: [
      "../images/img_product_25.png",
      "../images/img_product_26.png",
      "../images/img_product_27.png",
    ],
  },
];

const moreContent = document.querySelector(".more__content");
const moreContentItems = moreList.map((item, index) => {
  return `
  <div class="more__content-item  d-flex flex-column">
  <div class="item__title d-flex align-items-center">
  <div class="item__title-logo">
  <img src=${item.logoImg} alt="">
  </div>
  <div class="item__title-info">
  <ul class="d-flex flex-column align-items-start">
  <li>Ommani Mall Thạch Bàn Long</li>
  <li>
  <span>
  <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.50033 1.41675L6.91658 4.28592L10.0837 4.74883L7.79199 6.98092L8.33283 10.1342L5.50033 8.64467L2.66783 10.1342L3.20866 6.98092L0.916992 4.74883L4.08408 4.28592L5.50033 1.41675Z" fill="#FEC300"/>
  </svg>
  </span>
  <span>4.8(11k+)<span style="color:#2EAD5B;">TP. Hố Chí Minh</span></span>
  </li>
  <li class="d-flex align-items-center">
  <img src="../images/more_icon_1.png" alt="">
  <img src="../images/more_icon_2.png" alt="">
  <img src="../images/more_icon_3.png" alt="">
  <img src="../images/more_icon_4.png" alt="">
  <img src="../images/more_icon_5.png" alt="">
  </li>
  </ul>
  </div>
  </div>
  <div class="item__content d-flex align-items-center justify-content-between">
  ${item.listImg
    .map((item) => {
      return `
    <div class="item__content-detail d-flex flex-column"> 
      <img src=${item} />
      <ul>
        <li title="Xúc Xích Đức Việt gói 16 hông khói">Xúc Xích Đức Việt gói 16 hông khói...</li>
        <li>Đã bán 12</li>
        <li>89.000 đ</li>
      </ul>
    </div>
    `;
    })
    .join("")}
  </div>
  </div>
  `;
});

moreContent.innerHTML = moreContentItems.join("");

const buttonmoreContentItems = document.querySelector(".more__button button");

buttonmoreContentItems.addEventListener("click", () => {
  const loadMoreItem = moreContentItems.slice(0, 3).join("");
  moreContent.innerHTML += loadMoreItem;
  console.log("click");
});
