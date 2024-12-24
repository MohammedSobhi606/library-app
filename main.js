
const menuIcon = document.querySelector('.menu-icons');
const aLink = document.querySelector('.navigation a:last-child');
menuIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    document.querySelector('.container').classList.toggle('show');
}
aLink.addEventListener('click',toggleMenu );
// loader
const loader = document.querySelector('.loader-wrapper');
window.addEventListener('load',()=>{
    setTimeout(()=>{
        loader.classList.add('hide-loader')
    },4000)

});
// testimonials
const  slider = document.querySelector('.slider');
const  slides = slider.querySelectorAll('.slide');
const  prevBtn = document.querySelector('.controls i:nth-child(1)');
const  nextBtn = document.querySelector('.controls i:nth-child(2)');
let  currentSlide = 0;
nextBtn.addEventListener('click',slidenext)
prevBtn.addEventListener('click',slideback)
const indicators = document.querySelectorAll('.dots span');
indicators.forEach((indicator, index) => {

    indicator.addEventListener('click', () => {
        currentSlide = index;
        slider.style.transform=`translateX(${currentSlide *-20}%)`;
        indicators.forEach(dot => dot.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
    })
})
function slidenext() {
    if(currentSlide < slides.length - 1) {
        currentSlide++;
    }else {
        currentSlide = 0;
    }

    slider.style.transform=`translateX(${currentSlide*-20}%)`;

         indicators.forEach(dot => dot.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
}

function slideback() {
    if(currentSlide > 0) {
        currentSlide--;
    }else {
        currentSlide = slides.length - 1;
    }
    slider.style.transform=`translateX(${currentSlide *-20}%)`;
         indicators.forEach(dot => dot.classList.remove('active'));
        indicators[currentSlide].classList.add('active');
}
// dots indicators

