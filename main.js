//Cambiar de color la barra de navegación//
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
//Ocultar respuestas//
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon =faq.querySelector('.faq__icon i');
        if(icon.className==='uil uil-plus'){
            icon.className='uil uil-minus';
        }else{
            icon.className='uil uil-plus';
        }
})
})

//Swiper para testimonios se encuentra en index.html//