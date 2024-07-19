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

$('.filter-row__btn--toggle').on('click',function(){
    $('.filter-row__btn--toggle').find('i').toggleClass('fa-sort-up');
})
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
    }
    else{
        $('.filter-row__btn').removeClass('filter-row__btn--active');
        $(this).addClass('filter-row__btn--active');
    }
})

// Click Filter Button to call sidebar
$('.sidebar-caller__btn').on('click', function(){
    $('.sidebar__container').css({
        'left':'-50%',
        "transition": "0.5s ease-in-out",
    })
})
$('.sidebar__container').on('click', function(){
    $('.sidebar__container').css({
        'right':'-200%',
        "transition": "1.5s ease-in-out",
    })
})
$('.sidebar').on('click', function(event){
    event.stopPropagation();
})