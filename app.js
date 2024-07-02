
// FOR Modal    
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

if(myModal){
    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })
}
// For Input  Search
// let inputSearch = document.getElementById('input-search')
function onFocusShowItems() {
    let searchResult = document.getElementById('search-result-recommendation')
    searchResult.classList.remove('d-none')
}
function onBlurHideItems() {
    let searchResult = document.getElementById('search-result-recommendation')
    searchResult.classList.add('d-none')
}
// For Input  Search
// let inputSearch = document.getElementById('input-search')
function onFocusShowItems() {
    let searchResult = document.getElementById('search-result-recommendation')
    searchResult.classList.remove('d-none')
}
function onBlurHideItems() {
    let searchResult = document.getElementById('search-result-recommendation')
    searchResult.classList.add('d-none')
}
// For Input  Search
// let inputSearch = document.getElementById('input-search')
function onFocusShowItems() {
    let searchResult = document.getElementById('search-result-recommendation')
    searchResult.classList.remove('d-none')
}
function onBlurHideItems() {
    let searchResult = document.getElementById('search-result-recommendation')
    searchResult.classList.add('d-none')
}
// For Mobile Filter Option Effect on Click
function onClickFilterOptions(number){
    var getFilterOption = document.getElementsByClassName('filter-option')
    getFilterOption[number].classList.toggle('mobile-filter-option-toggle');
    for(var i in getFilterOption){
        if(i != number){
            getFilterOption[i].classList.remove('mobile-filter-option-toggle')
        }
    }
}
// FOR MOBILE FILTER BAR EFFECT ON CLICK
var getMobileFilterBar = document.getElementsByClassName('mobile-result-filter')
var getMobileFilterContent = document.getElementsByClassName('mobile-result-filter-content')
var getShowFilterBtn = document.querySelector('#showFilterBarBtn');

function toggleMobileFilterBar(){
    getMobileFilterBar[0].classList.toggle('show-mobile-result-filter')
}

getMobileFilterContent[0].addEventListener('click', (event)=>{
    event.stopPropagation()
})

function onCLickSlideList(objectId, direction){
    var object = document.getElementById(objectId)
    var scrollDistance = 100;
    if(direction=== 'right'){
        object.scrollBy({
            left: scrollDistance,
            behavior: 'smooth'
        })
    }
    else if(direction === 'left'){
        object.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth'
        })
    }
}
function changeImgSrc(sourceImg, targetId){
    var img = sourceImg.querySelector('img')
    var imgSrc = img.src
    var targetItem = document.getElementById(targetId)
    targetItem.src = imgSrc;
}
// var getMobileFilterBarContent = document.getElementsByClassName('mobile-result-filter-content')
// getMobileFilterBarContent.addEventListener('click', (event)=>{
//     // event.stopPropagation();
//     console.log()
// })