const createcommonGroupProducts = () => {
  let temp = "";
  for (let i = 1; i <= 9; i++) {
    temp += `
            <a href="#" class="commonGroupProducts-item">
              <div class="header">
                <img class="logo" src="../assets/svg/Rectangle 5016.svg" alt="" />
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
              <div class="products">
                <div class="product">
                  <img src="../assets/svg/Rectangle 5017.svg" alt="" />
                  <div class="info">
                    <span class="name">
                      Xúc Xích Đức Việt gói 16 hông khói...
                    </span>
                    <span class="sold">Đã bán 12</span>
                    <span class="cost">89.000 đ</span>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/svg/raumuong.svg" alt="" />
                  <div class="info">
                    <span class="name">
                      Xúc Xích Đức Việt gói 16 hông khói...
                    </span>
                    <span class="sold">Đã bán 12</span>
                    <span class="cost black">89.000 đ</span>
                  </div>
                </div>
                <div class="product">
                  <img src="../assets/svg/caphe.svg" alt="" />
                  <div class="info">
                    <span class="name">
                      Xúc Xích Đức Việt gói 16 hông khói...
                    </span>
                    <span class="sold">Đã bán 12</span>
                    <span class="cost black">89.000 đ</span>
                  </div>
                </div>
              </div>
            </a>
  
        `;
  }
  const parrent = document.querySelector(".commonGroupProducts-main");
  if (parrent) {
    parrent.innerHTML = temp;
  }
};
const createListCategory = () => {
  const listcategory = [
    {
      title: "Trái cây",
      img: "../assets/images/cate1.png",
    },
    {
      title: "Thịt, Trứng",
      img: "../assets/images/cate2.png",
    },
    {
      title: "Cá, Thuỷ hải sản",
      img: "../assets/images/cate3.png",
    },
    {
      title: "Rau, Củ",
      img: "../assets/images/cate4.png",
    },
    {
      title: "Thực phẩm Việt",
      img: "../assets/images/cate5.png",
    },
    {
      title: "Sữa, Bơ",
      img: "../assets/images/cate6.png",
    },
    {
      title: "Đông lạnh",
      img: "../assets/images/cate7.png",
    },
    {
      title: "Dầu ăn",
      img: "../assets/images/cate8.png",
    },
    {
      title: "Gạo, Mì, Nông sản",
      img: "../assets/images/cate9.png",
    },
    {
      title: "Đồ hộp",
      img: "../assets/images/cate10.png",
    },
    {
      title: "Bia, Đồ uống",
      img: "../assets/images/cate11.png",
    },
    {
      title: "Thực phẩm chay",
      img: "../assets/images/cate12.png",
    },
    {
      title: "Dành cho trẻ em",
      img: "../assets/images/cate13.png",
    },
    {
      title: "Bánh kẹo, giỏ quà",
      img: "../assets/images/cate14.png",
    },
    {
      title: "Đồ ăn, Thú cưng",
      img: "../assets/images/cate15.png",
    },
    {
      title: "Chăm sóc cá nhân",
      img: "../assets/images/cate16.png",
    },
    {
      title: "Chăm sóc nhà cửa",
      img: "../assets/images/cate17.png",
    },
  ];
  let tempInner = "";
  listcategory.forEach((item) => {
    tempInner += `
          <a href=""  class="commonCategory_item">
                    <img src="${item.img}" alt="" />
                    <span>${item.title}</span>
                  </a>
          `;
  });
  const categoryList = document.querySelector(".commonCategory_list");
  if (categoryList) {
    categoryList.innerHTML = tempInner;
  } else {
    console.error("Không tìm thấy phần tử .commonCategory-list trong DOM.");
  }
};
const createCarouSel = () => {
  const carouselButtonsContainer = document.querySelector(
    ".carousel-indicators"
  );

  const numSlides = 5;

  for (let i = 0; i < numSlides; i++) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#Home__banner");
    button.setAttribute("data-bs-slide-to", i.toString());
    button.setAttribute("aria-label", `Slide ${i + 1}`);
    button.classList.add("btnSwitchCarousel");

    if (i === 0) {
      button.classList.add("active");
      button.setAttribute("aria-current", "true");
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
          <img class="Home__banner-img" src="${src}" alt="">
        </div>
      `;
    carouselInner.insertAdjacentHTML("beforeend", carouselItemHTML);
  });
};
const createstandoutProductItem = () => {
  let list = document.querySelector(".standoutProductList");
  let str = "";
  for (let i = 0; i < 8; i++) {
    str += `
      <div class="standoutProductItem">
                <img class="square-image" src="${
                  i === 0
                    ? "../assets/svg/searchpr1.svg"
                    : `../assets/images/sanphamnoibat${i + 1}.png`
                }" alt="" />
                <div class="percent">14%</div>
                <span class="name">${
                  i === 0
                    ? "Dừa xiêm sọ size L (600-900g)"
                    : "Bông cải xanh 100g"
                }</span>
                <span class="gia">132.000 đ</span>
                <div class="progress" style="height: 20px">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 35%"
                    aria-valuenow="35"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span>Vừa mở bán</span>
                </div>
              </div>
    `;
  }
  list.innerHTML = str;
  let listsquareimage = document.querySelectorAll(".square-image");
  listsquareimage.forEach((item) => {
    item.style.height = item.offsetWidth + "px";
  });
};
const createcommonProductList = (number, listElement) => {
  let list = document.querySelector(".commonProductList");
  if (listElement !== undefined) {
    list = document.querySelector(listElement);
  }
  let str = "";
  for (let i = 0; i < number; i++) {
    str += `
               <a href="#" class="commonProductItem">
            <div class="headerlogo">
              <img
                class="object-fit-contain w-100"
                src="../assets/images/searchpr1.png"
                alt=""
              />
              <img class="saleIcon" src="../assets/svg/SaleIcon.svg" alt="">
              <div class="headlogo">
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
                class="freeshiplogo"
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
