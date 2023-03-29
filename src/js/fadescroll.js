const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll('.hidden');
const hiddenLeft = document.querySelectorAll('.hiddenLeft');
const hiddenRight = document.querySelectorAll('.hiddenRight');

hidden.forEach(el => {
    observer.observe(el);
})

hiddenLeft.forEach(el => {
    observer.observe(el);
})

hiddenRight.forEach(el => {
    observer.observe(el);
})

