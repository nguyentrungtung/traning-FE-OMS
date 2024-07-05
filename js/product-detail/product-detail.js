
document.getElementById('button-minus').addEventListener('click', function () {
    var input = document.getElementById('number-input');
    var value = parseInt(input.value, 10);
    if (value > parseInt(input.min, 10)) {
        input.value = value - 1;
    }
});

document.getElementById('button-plus').addEventListener('click', function () {
    var input = document.getElementById('number-input');
    var value = parseInt(input.value, 10);
    input.value = value + 1;
});

// img choose size

$(document).ready(function() {
    $('#mainImg').elevateZoom({
        zoomType: "window",
        cursor: "zoom-in",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750,
        zoomWindowWidth: 400,   
        zoomWindowHeight: 300,
        borderSize: 1,
        borderColour: "#29AB56 !important;",
        zoomWindowOffetx: 0 //margin left of zoomed element
    });
});
function changeZoomImg(source, target){
    console.log(document.getElementById(target))
    var imgTag = source.querySelector('img')
    var imgSrc = imgTag.src //Get Attribute src
    imgSrc = imgSrc.split('/') //get all folders that contains img file
    var name = imgSrc.pop() //get img file name
    imgSrc = imgSrc.join('/') + '/zoom-' + name; //Change file name with 'zoom' for zooming purpose and merge to the link
    var targetID = '#' + target;
    $('.zoomContainer').remove();
    $(targetID).removeData('elevateZoom');
    document.getElementById(target).setAttribute('data-zoom-image', imgSrc)
    $(targetID).data('zoom-image', imgSrc).elevateZoom({
        zoomType: "window",
        cursor: "zoom-in",
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 750,
        zoomWindowWidth: 400,   
        zoomWindowHeight: 300,
        borderSize: 1,
        borderColour: "#29AB56 !important;",
        zoomWindowOffetx: 0 //margin left of zoomed element
    });
}

// Price Slider

