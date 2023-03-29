const modal = document.querySelector('.modal');
const overlay = document.getElementById('overlay');
console.log(modal);

const services = document.querySelectorAll('.modalMore');
services.forEach(servis => {
    servis.addEventListener('click' , () => {

        modal.classList.add('active');
        overlay.classList.add('active');
        const h2 = servis.parentElement.querySelector('h2').innerText;
        const modalH2 = modal.querySelector('h2');
        modalH2.innerText = h2;
        overlay.addEventListener('click' , () => {
            modal.classList.remove('active');
        overlay.classList.remove('active');
        })

    })
})

const modalClose = document.getElementById('x');

modalClose.addEventListener('click' , () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
})