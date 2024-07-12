document.addEventListener('DOMContentLoaded', function(){
    const locationoption = document.getElementsByName('locationDropdown');
    locationoption.forEach((item)=>{
        item.addEventListener('change', ()=>{
            console.log(item.value)
        })
    })
    document.addEventListener('click', function (e) {
        const clickedItem = e.target;
        const isCollapseToggle = clickedItem.getAttribute('data-bs-toggle') === 'collapse';
        const isCollapseTarget = clickedItem.closest('.collapse');
        
        if (!isCollapseToggle && !isCollapseTarget) {
            const collapses = document.querySelectorAll('.collapse');
            collapses.forEach(collapse => {
                const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
                bsCollapse.hide();
            });
        }
    });
})
