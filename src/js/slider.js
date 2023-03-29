const carouselSlide = document.querySelector('.carousel_slide');
const carouselImages = document.querySelectorAll('.carousel_slide img');

//button 
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');



//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextButton.addEventListener('click', () => {
   

    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevButton.addEventListener('click', () => {
    if(counter <=0){
        return;
    }
    
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend' , () => {

        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
})


carouselSlide.addEventListener('transitionend' , () => {

        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
        if(carouselImages[counter].id === 'firstClone'){
            carouselSlide.style.transition = 'none';
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        };
})

