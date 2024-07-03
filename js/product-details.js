const tabs = document.querySelectorAll(".tab_btn");
const all_content = document.querySelectorAll(".content");
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

document.addEventListener("DOMContentLoaded", function () {
  const thumbnailsContainer = document.querySelector(
    ".product-gallery__thumbnails"
  );
  const thumbnails = document.querySelectorAll(".product-gallery__thumbnail");
  const mainImage = document.getElementById("mainImage");
  const preBtn = document.querySelector(".pre-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentImageIndex = 0;

  const mainImageContainer = document.querySelector(
    ".product-gallery__main-image"
  );
  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("product-gallery__review");
  mainImageContainer.appendChild(reviewContainer);

  // Thêm biến zoomFactor để điều chỉnh mức độ zoom
  const zoomFactor = 1.2;

  // Thêm phần tử ô vuông để làm vùng hiển thị màu sắc
  const zoomArea = document.createElement("div");
  zoomArea.classList.add("product-gallery__zoom-area");
  mainImageContainer.appendChild(zoomArea);

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

  mainImageContainer.addEventListener("mouseenter", function () {
    reviewContainer.style.backgroundImage = `url('${mainImage.src}')`;
    reviewContainer.style.backgroundSize = `${
      mainImage.naturalWidth * zoomFactor
    }px ${mainImage.naturalHeight * zoomFactor}px`;
    reviewContainer.style.display = "block";
    zoomArea.style.display = "block";
    mainImage.classList.add("grayscale");
  });

  mainImageContainer.addEventListener("mouseleave", function () {
    reviewContainer.style.display = "none";
    zoomArea.style.display = "none";
    mainImage.classList.remove("grayscale");
  });

  mainImageContainer.addEventListener("mousemove", function (e) {
    const boundingRect = mainImage.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;

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

    zoomArea.style.left = `${limitedX}px  `;
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
  });
});
