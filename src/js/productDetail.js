function imgSrcChanger(source, targetID){
    let imgSrcTag = source.querySelector('img') //get img tag
    let imgSrc = imgSrcTag.src;
    document.querySelector('#' + targetID).src = imgSrc;
}
function onClickSlideBtn(targetID, direction){
    let targetTag = document.querySelector('#' + targetID)
    let scrollX = 100;
    if(direction === 'right'){
        targetTag.scrollBy({
            left: scrollX,
            behavior: 'smooth'
        })
    }
    else if(direction === 'left'){
        targetTag.scrollBy({
            left: -scrollX,
            behavior: 'smooth'
        })
    }
}


function initEzPlus(){
    $('.zoomContainer').remove();
    if(window.matchMedia('(min-width: 1200px)').matches){
        $('#mainImg').ezPlus({
            tint: true,
            tintColour: '#515154', tintOpacity: 0.5,
            lensSize: 100
        });
    }
    else{
        $('#mainImg').ezPlus({
            zoomType: 'lens',
            lensSize: 200
        });
    }
}
initEzPlus();
$(window).resize(()=>{
    initEzPlus();
})

function changeValueInput(target, change){
    let targetID = '#' + target;
    let targetTag = document.querySelector(targetID);
    if(change == 'minus' && targetTag.value > targetTag.min){
        targetTag.value = eval(targetTag.value - 1)
    }
    else if(change == 'add'){
        
        targetTag.value = eval(targetTag.value) + 1
    }
}

function zoomImgChanger(source, target){
    var imgSrcTag = source.querySelector('img')
    var imgSrc = imgSrcTag.src //Get Attribute src
    imgSrc = imgSrc.split('/') //get all folders that contains img file
    var name = imgSrc.pop() //get img file name
    imgSrc = imgSrc.join('/') + '/large/' + name; //Add 'zoom' folder into the path (before the name of the file) for zooming purpose and merge to the link
    var targetID = '#' + target;
    console.log('src changed')
    $('.zoomContainer').remove();
    $(targetID).removeData('ezPlus');
    $(targetID).data('zoom-image', imgSrc)
    initEzPlus();
}
const related_product_slider = document.querySelector('.related-product__content');
var onHold__related_product = false;
related_product_slider.addEventListener('mousedown', (event) => onDown(event, related_product_slider));
related_product_slider.addEventListener('mouseup', (event) => onCancel(event, related_product_slider));
related_product_slider.addEventListener('mouseleave', (event) => onCancel(event, related_product_slider));
related_product_slider.addEventListener('mousemove', (event) => onMove(event, related_product_slider));

// Prevent click event on <a> elements while dragging
var related_product_link = related_product_slider.querySelectorAll('a');
related_product_link.forEach(link => {
    link.addEventListener('click', (event) => {
        if(onHold__related_product) {
            event.preventDefault();
            event.stopPropagation();
        }
    });
    link.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});
const related_product_images = related_product_slider.querySelectorAll('img');
related_product_images.forEach(img => {
    img.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });
});
function onDown(e, item) {
    onHold__related_product = false;
    const startX = e.pageX - item.offsetLeft;
    const scrollLeft = item.scrollLeft;
    item.dataset.startX = startX;
    item.dataset.scrollLeft = scrollLeft;
    item.classList.add('active-scroll');
}

function onCancel(e, item) {
    if(onHold__related_product){
        setTimeout(()=>{
            onHold__related_product = false;
        }, 0)
    }
    delete item.dataset.startX;
    delete item.dataset.scrollLeft;
    item.classList.remove('active-scroll');
}

function onMove(e, item) {
    if (!item.dataset.startX || !item.dataset.scrollLeft) {
        return;
    }
    e.preventDefault();
    onHold__related_product = true;
    const startX = parseInt(item.dataset.startX);
    const scrollLeft = parseInt(item.dataset.scrollLeft);
    const x = e.pageX - item.offsetLeft;
    const walk = (x - startX) * 1.2; //scroll-fast
    item.scrollLeft = scrollLeft - walk;
}

// Expand Product Description with btn
let product_description = $('.detailed__content') //hidden content - responsive content
let moreBtn = $('.more-btn')
let moreBtn_text = moreBtn.find('span')
let moreBtn_icon = moreBtn.find('i')
let rotation = 0;
if (product_description.outerHeight() <= 500) {
    moreBtn.hide(); // Ẩn nút nếu nội dung không vượt quá chiều cao của container
} else {
    moreBtn.show(); // Hiển thị nút nếu nội dung vượt quá chiều cao của container
}
moreBtn.on('click', ()=>{
    if (product_description.hasClass('expanded')) {
        moreBtn_text.text('Xem thêm');
        product_description.removeClass('expanded');
    } else {
        moreBtn_text.text('Thu gọn');
        product_description.addClass('expanded');
    }
    rotation += 180;
    moreBtn_icon.css('transform', `rotate(${rotation}deg)`);
})


$('.filter__btn').on('click', function(){
    if($(this) == $('.filter__btn:first')){
        $(this).addClass('filter--active');
    }
    else if($(this) != $('.filter__btn:first') && $(this).hasClass('filter--active')){
        $('.filter__btn').removeClass('filter--active');
        $('.filter__btn:first').addClass('filter--active');
    }
    else{
        $('.filter__btn').removeClass('filter--active');
        $(this).addClass('filter--active');
    }
})

let video_container = $('.video__container')
let video_btn = video_container.find('button');
video_btn.on('click', function(){
    let video = $(this).closest('.video__container').children('video');
    let btn_overlay = $(this).closest('.video__container').children('.video__btn')
    let icon = $(this).find('i');
    if(video.get(0).paused){
        video.trigger('play');
        icon.removeClass('fa-play').addClass('fa-pause')
        btn_overlay.fadeOut(500)
    }
    else{
        video.trigger('pause');
        icon.removeClass('fa-pause').addClass('fa-play')
    }
})
let video_self = video_container.find('video')
let btn_overlay = video_container.find('.video__btn')
video_self.hover(function(){
    if(!$(this).get(0).paused){
        btn_overlay.fadeIn(300)
    }
})