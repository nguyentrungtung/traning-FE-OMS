npm run watch:sass

1280
1140
1024
992
768
mobile

@media (max-width: 1280px) {
}
@media (max-width: 1140px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 992px) {
}
@media (max-width: 768px) {
}

1280 pixels: Đây là một kích thước phổ biến cho các màn hình laptop, đáng chú ý là độ phân giải HD (High Definition).
1140 pixels: Kích thước này có thể được sử dụng cho các màn hình laptop nhỏ hơn, nhưng vẫn đủ để hiển thị nội dung một cách thoải mái.
1024 pixels: Đây là một kích thước màn hình nhỏ hơn, thường được sử dụng trên các laptop cũ hoặc thiết bị di động nhỏ hơn.
992 pixels: Kích thước này thường được sử dụng cho các màn hình laptop trung bình và là một trong những điểm dừng phổ biến trong responsive design.
768 pixels: Đây là kích thước màn hình nhỏ hơn, thường được sử dụng trên các laptop nhỏ, máy tính bảng hoặc thiết bị di động.

.class1.class2: cả tên 1 và tên 2 có trong class
.class1 .class2: chọn class2 nằm trong class1
element1>element2 : chọn tất cả element2 mà element1 là phần tử cha

showSidebarButton.addEventListener('click', () => {
sidebar.style.display = 'block';
setTimeout(() => {
sidebar.style.transform = 'translateX(0%)';
}, 100); // Thêm độ trễ nhỏ trước khi áp dụng transform
});
Trong ví dụ trên, chúng ta đã sử dụng setTimeout để thêm một độ trễ nhỏ trước khi áp dụng transform. Điều này là cần thiết vì trình duyệt cần một thời gian ngắn để áp dụng transform sau khi thay đổi thuộc tính display. Bằng cách thêm độ trễ, chúng ta đảm bảo rằng transform sẽ được áp dụng sau khi sidebar được hiển thị.

dùng swipper
dùng thẻ javascript:void() cho thẻ a
dùng nav và tab cho thẻ nav link
https://swiperjs.com/demos
collapse

.avatar-group .avatar:nth-of-type(n + 2) { <!-- chọn từ phần tử avartar thứ 2 trở đi -->
margin-left: -10px;
}

span:last-of-type chọn phần tử span cuối cùng

phân comment nếu mà up nhiều ảnh sẽ chỉ hiển thị ít đi

X-Small None <576px
Small sm ≥576px
Medium md ≥768px
Large lg ≥992px
Extra large xl ≥1200px
Extra extra large xxl ≥1400px

https://www.jqueryscript.net/demo/jQuery-Plugin-For-Image-Zoom-On-Hover-picZoomer/
