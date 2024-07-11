const createCarouSel = (queryStr) => {
  const carouselButtonsContainer = document.querySelector(queryStr);

  const numSlides = 5;

  for (let i = 0; i < numSlides; i++) {
    const button = document.createElement("button");
    button.setAttribute("data-bs-target", "#banner");
    button.setAttribute("data-bs-slide-to", i.toString());
    button.classList.add("btn-switch-carousel");

    if (i === 0) {
      button.classList.add("active");
    }
    if (carouselButtonsContainer) {
      carouselButtonsContainer.appendChild(button);
    }
  }
  const imageSources = [
    "../assets/images/image 1.png",
    "../assets/images/image 2.png",
    "../assets/images/image 3.png",
    "../assets/images/banner4.png",
    "../assets/images/banner5.png",
  ];
  const carouselInner = document.querySelector(".carousel-inner");
  imageSources.forEach((src, index) => {
    const activeClass = index === 0 ? "active" : "";
    const carouselItemHTML = `
          <div class="carousel-item ${activeClass}">
            <img src="${src}" alt="" style="width: 100%; object-fit: contain;">
          </div>
        `;
    carouselInner.insertAdjacentHTML("beforeend", carouselItemHTML);
  });
};
const createcommongroupproduct = (queryStr) => {
  let temp = "";

  for (let i = 1; i <= 9; i++) {
    let tempProducts = "";
    for (let j = 1; j <= 3; j++) {
      tempProducts += `
        <a href="#" class="product">
          <img src="../assets/images/explore${i}${j}.png" alt="" />
          <div class="info">
            <span 
              data-bs-custom-class="custom-tooltip"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              data-bs-title="Xúc Xích Đức Việt gói 16 hông khói" >
              Xúc Xích Đức Việt gói 16 hông khói ...
            </span>
            <span class="sold">Đã bán 12</span>
            <span class="cost">89.000 đ</span>
          </div>
        </a>
      `;
    }
    temp += `
            <div class="item" >
              <div class="item_header">
                <img class="logo" src="../assets/images/explorelogo${i}.png" alt="" />
                <div class="info">
                  <span class="title">Ommani Mall Thạch Bàn Long</span>
                  <div class="d-flex gap-1">
                    <img src="../assets/svg/star.svg" alt="" />
                    <span class="follow">4.8 (11k+)</span>
                    <span class="address">TP. Hồ Chí Minh</span>
                  </div>
                  <div class="certificate">
                    <img src="../assets/images/image 28.svg" alt="" />
                    <img src="../assets/images/image 29.svg" alt="" />
                    <img src="../assets/images/image 30.svg" alt="" />
                    <img src="../assets/images/image 31.svg" alt="" />
                    <img src="../assets/images/image 32.svg" alt="" />
                  </div>
                </div>
              </div>
              <div class="item_products">
                ${tempProducts}
              </div>
            </div>
  
        `;
  }
  const parrent = document.querySelector(queryStr);
  if (parrent) {
    parrent.innerHTML = temp;
  }
};
const createcommonProductList = (number, queryStr) => {
  let list = document.querySelector(".related-product_list");
  if (queryStr !== undefined) {
    list = document.querySelector(queryStr);
  }
  let str = "";
  for (let i = 0; i < number; i++) {
    str += `
               <a href="#" class="item-product">
            <div class="header-logo">
              <img
                class="object-fit-contain w-100"
                src="../assets/images/searchpr1.png"
                alt=""
              />
              <img class="sale-icon" src="../assets/svg/SaleIcon.svg" alt="">
              <div class="head-logo">
                <img
                  class="h-100 object-fit-contain"
                  src="../assets/svg/mall.svg"
                  alt=""
                />
                <img
                  class="h-100 object-fit-contain"
                  src="../assets/images/image 28.svg"
                  alt=""
                />
                <img src="../assets/images/image 29.svg" alt="" />
                <img
                  class="h-100 object-fit-contain"
                  src="../assets/images/image 30.svg"
                  alt=""
                />
              </div>
              <img
                class="freeship-logo"
                src="../assets/svg/freeshiplogo.svg"
                alt=""
              />
            </div>

            <div class="info">
              <div class="name">
                Bông cải xanh 100g nội địa Nhật Bản và tự nhiên 100% x
              </div>
              <div class="main">
                <div class="top">
                  <span>87.000 đ</span>
                  <img src="../assets/svg/Vận chuyển.svg" alt="" />
                </div>
                <div class="bottom">
                  <div class="stars">
                    <img src="../assets/svg/starfull.svg" alt="">
                    <img src="../assets/svg/starfull.svg" alt="">
                    <img src="../assets/svg/starfull.svg" alt="">
                    <img src="../assets/svg/starfull.svg" alt="">
                    <img src="../assets/svg/starfull.svg" alt="">
                  </div>
                  <span class="divideV"></span>
                  <span class="sold">1.6k đã bán</span>
                </div>
              </div>
              <div class="address">TP. Hồ Chí Minh</div>
            </div>
          </a>
           `;
  }
  list.innerHTML = str;
};
