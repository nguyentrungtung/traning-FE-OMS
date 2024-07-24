let price_btn_toggle = $('.filter-bar__btn--toggle');
price_btn_toggle.on('click', function(){
    price_btn_toggle.find('i').toggleClass('fa-sort-up');
})
$('.filter-bar__btn').on('click', function(){
    if($(this) == $('.filter-bar__btn:first')){
        $(this).addClass('filter-bar__btn--active');
    }
    else if($(this) != $('.filter-bar__btn:first') && $(this).hasClass('filter-bar__btn--active')){
        if(!$(this).hasClass('filter-bar__btn--toggle')){
            $('.filter-bar__btn').removeClass('filter-bar__btn--active');
            $('.filter-bar__btn:first').addClass('filter-bar__btn--active');
        }
    }
    else{
        $('.filter-bar__btn').removeClass('filter-bar__btn--active');
        $(this).addClass('filter-bar__btn--active');
    }
})

$('.body__name').prop('title', function() {
    return $(this).text();
});

var filter_row__btn = $('.filter-row__btn')
filter_row__btn.on('click', function(){
    if($(this) == $('.filter-row__btn:first')){
        $(this).addClass('filter-row__btn--active');
    }
    else if($(this) != $('.filter-row__btn:first') && $(this).hasClass('filter-row__btn--active')){
        if(!$(this).hasClass('filter-row__btn--toggle')){
            $('.filter-row__btn').removeClass('filter-row__btn--active');
            $('.filter-row__btn:first').addClass('filter-row__btn--active');
        }
        else{
            if($('.fa-sort-down.sort-hidden__icon').hasClass('sort-hidden__icon--active')){
                $('.fa-sort-down.sort-hidden__icon').removeClass('sort-hidden__icon--active')
                $('.fa-sort-up.sort-hidden__icon').addClass('sort-hidden__icon--active')
            }
            else{
                $('.fa-sort-up.sort-hidden__icon').removeClass('sort-hidden__icon--active')
                $('.fa-sort-down.sort-hidden__icon').addClass('sort-hidden__icon--active')
            }
        }
    }
    else{
        $('.filter-row__btn').removeClass('filter-row__btn--active');
        $(this).addClass('filter-row__btn--active');
        if($(this).hasClass('filter-row__btn--toggle')){
            $('.fa-sort-down.sort-hidden__icon').addClass('sort-hidden__icon--active');
        }
        else{
            $('.fa-sort-down.sort-hidden__icon').removeClass('sort-hidden__icon--active')
            $('.fa-sort-up.sort-hidden__icon').removeClass('sort-hidden__icon--active')
        }
    }
})

// Click Filter Button to call sidebar
$('.sidebar-caller__btn').on('click', function(){
    // Call
    $('.sidebar__container').css({
        'right':'0',
        "transition": "0.5s ease-in-out",
    })
    $('.sidebar__overlayer').css({
        'right':'0',
        'opacity': '1',
        'transition': 'opacity 0.3s',
    })
})
$('.sidebar__container').on('click', function(){
    // Hide
    $('.sidebar__container').css({
        'right':'-120%',
        "transition": "0.3s ease-in-out",
    })
    $('.sidebar__overlayer').css({
        'opacity': '0',
        'transition': 'opacity 0.3s',
    })
    setTimeout(function(){
        $('.sidebar__overlayer').css({
            'right': '-100%',
        })
    }, 310)
})
$('.sidebar__close-btn').on('click', function(event){
    $('.sidebar__container').css({
        'right':'-120%',
        "transition": "0.3s ease-in-out",
    })
    event.preventDefault();
    $('.sidebar__overlayer').css({
        'opacity': '0',
        'transition': 'opacity 0.3s',
    })
    setTimeout(function(){
        $('.sidebar__overlayer').css({
            'right': '-100%',
        })
    }, 310)
})
$('.sidebar').on('click', function(event){
    event.stopPropagation();
})


$('.shop__mini-card').prop('title', function() {
    return $(this).find('.info__shop-name').text();
});

// Handle Filter Btn Group Click || Change Value on Click
var dropdown_btn_list = $('.location-filter__group').find('.btn-group')
var option_for_btn_group = dropdown_btn_list.find('.dropdown-item');
option_for_btn_group.on('click', function(){
    $(this).closest('.btn-group').find('button').text($(this).text())
})

// Advoid drag image in slide out of position
$('.carousel-inner').on('dragstart', (event) => {
    event.preventDefault();
});

// Functions for holding mouse on Carousel then slide
var isMouseHolding_OnCarousel = false;
var mouseStartingLocation_OnCarousel;
var mouseEndingLocation_OnCarousel;
$('.carousel').on('mousedown', function(event){
    $(this).css({'cursor': 'grabbing'})
    isMouseHolding_OnCarousel = true;
    mouseStartingLocation_OnCarousel = event.pageX;
})
$('.carousel').on('mouseup', function(event){
    $(this).css({'cursor': 'pointer'});
    mouseEndingLocation_OnCarousel = event.pageX;
    if(isMouseHolding_OnCarousel){
        isMouseHolding_OnCarousel = false;
        if(mouseEndingLocation_OnCarousel > mouseStartingLocation_OnCarousel){
            $(this).carousel('prev');
        }
        else if(mouseEndingLocation_OnCarousel < mouseStartingLocation_OnCarousel){
            $(this).carousel('next');
        }
        else{
            return;
        }
    }
})
$('.carousel').on('mouseleave', function(event){
    $(this).css({'cursor': 'pointer'})
    mouseEndingLocation_OnCarousel = event.pageX;
    if(isMouseHolding_OnCarousel){
        isMouseHolding_OnCarousel = false;
        if(mouseEndingLocation_OnCarousel > mouseStartingLocation_OnCarousel){
            $(this).carousel('prev');
        }
        else if(mouseEndingLocation_OnCarousel < mouseStartingLocation_OnCarousel){
            $(this).carousel('next');
        }
        else{
            return;
        }
    }
    else{
        return;
    }
})

//Function to set interval again for carousel when click on indicator button
var indicatorButtons = $('.carousel-indicators').find('button');
indicatorButtons.on('click', function(){
    const pauseCarousel = setTimeout(function(){
        $('#carouselExampleIndicators').carousel('pause');
    }, 5000)
    clearTimeout(pauseCarousel)
    $('#carouselExampleIndicators').carousel('next')
})