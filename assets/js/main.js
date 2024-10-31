$('.owl-carousel').owlCarousel({
    rtl: true,
    margin:10,
    navElement:"test",
    nav:true,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:5
        }
    }
})

// Drag functionallity for products slider

const carousel = document.getElementById('carouselProducts');
let isDragging = false;
let startX;
let currentTranslate = 0;

carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    currentTranslate = 0;
    carousel.classList.add('grabbing');
    e.preventDefault();
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX;
    currentTranslate = x - startX;
});

carousel.addEventListener('mouseup', () => {
    isDragging = false;
    carousel.classList.remove('grabbing'); 

    if (currentTranslate < -100) {
        new bootstrap.Carousel(carousel).prev(); 
    } else if (currentTranslate > 100) {
        new bootstrap.Carousel(carousel).next(); 
    }
    currentTranslate = 0;
});

carousel.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

carousel.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        carousel.classList.remove('grabbing');
        currentTranslate = 0;
    }
});