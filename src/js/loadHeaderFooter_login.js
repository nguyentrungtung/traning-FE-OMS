Promise.all([
    fetch('/src/views/layouts/_footer.html')
    .then(res => res.text())
    .then(data => {
        let footer = document.querySelector('footer');
        if(footer){
            footer.innerHTML = data;
        }
    }),
    fetch('/src/views/layouts/_header.html')
    .then(res => res.text())
    .then(data => {
        let header = document.querySelector('header');
        if(header){
            header.innerHTML = data;
        }
    })
]);