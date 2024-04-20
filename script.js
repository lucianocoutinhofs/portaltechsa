const miniaturas = document.querySelectorAll('.miniatura');
const zoom = document.querySelector('.zoom');
const mudar = document.querySelectorAll('.miniatura');



miniaturas.forEach(miniatura => {
    miniatura.addEventListener('mouseenter', e => {
        zoom.innerHTML = e.target.outerHTML;
    })
   
    miniatura.addEventListener('mouseleave', e => {
        zoom.innerHTML = '';
    })
});


