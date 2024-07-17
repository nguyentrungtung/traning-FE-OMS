document.addEventListener('DOMContentLoaded', function(){
    const locationoption = document.getElementsByName('locationDropdown');
    locationoption.forEach((item)=>{
        item.addEventListener('change', ()=>{
            console.log(item.value)
        })
    })
    // document.addEventListener('click', function (e) {
    //     const clickedItem = e.target;
    //     const isCollapseToggle = clickedItem.getAttribute('data-bs-toggle') === 'collapse';
    //     const isCollapseTarget = clickedItem.closest('.collapse');
        
    //     if (!isCollapseToggle && !isCollapseTarget) {
    //         const collapses = document.querySelectorAll('.collapse');
    //         collapses.forEach(collapse => {
    //             const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
    //             bsCollapse.hide();
    //         });
    //     }
    // });
    const product_category_slider = document.querySelector('.product-category__content');
    var onHold__product_category = false;
    product_category_slider.addEventListener('mousedown', (event) => onDown(event, product_category_slider));
    product_category_slider.addEventListener('mouseup', (event) => onCancel(event, product_category_slider));
    product_category_slider.addEventListener('mouseleave', (event) => onCancel(event, product_category_slider));
    product_category_slider.addEventListener('mousemove', (event) => onMove(event, product_category_slider));
    
    const trusted_shop_slider = document.querySelector('.trusted-shop__content');
    var onHold__trusted_shop = false;
    trusted_shop_slider.addEventListener('mousedown', (event) => onDown(event, trusted_shop_slider));
    trusted_shop_slider.addEventListener('mouseup', (event) => onCancel(event, trusted_shop_slider));
    trusted_shop_slider.addEventListener('mouseleave', (event) => onCancel(event, trusted_shop_slider));
    trusted_shop_slider.addEventListener('mousemove', (event) => onMove(event, trusted_shop_slider));

    // Prevent click event on <a> elements while dragging
    var shop_link = trusted_shop_slider.querySelectorAll('a');
    shop_link.forEach(link => {
        link.addEventListener('click', (event) => {
            if(onHold__trusted_shop) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
        link.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    });
    const shop_images = trusted_shop_slider.querySelectorAll('img');
    shop_images.forEach(img => {
        img.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    });
    // 
    
    var product_category_link = product_category_slider.querySelectorAll('a');
    product_category_link.forEach(link => {
        link.addEventListener('click', (event) => {
            if(onHold__product_category) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
        link.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    });
    const product_category_images = product_category_slider.querySelectorAll('img');
    product_category_images.forEach(img => {
        img.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });
    });


    function onDown(e, item) {
        onHold__trusted_shop = false;
        onHold__product_category = false;
        const startX = e.pageX - item.offsetLeft;
        const scrollLeft = item.scrollLeft;
        item.dataset.startX = startX;
        item.dataset.scrollLeft = scrollLeft;
        item.classList.add('active-scroll');
    }

    function onCancel(e, item) {
        if(onHold__trusted_shop){
            setTimeout(()=>{
                onHold__trusted_shop = false;
            }, 0)
        }
        if(onHold__product_category){
            setTimeout(()=>{
                onHold__product_category = false;
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
        onHold__trusted_shop = true;
        onHold__product_category = true;
        const startX = parseInt(item.dataset.startX);
        const scrollLeft = parseInt(item.dataset.scrollLeft);
        const x = e.pageX - item.offsetLeft;
        const walk = (x - startX) * 1.2; //scroll-fast
        item.scrollLeft = scrollLeft - walk;
    }

})