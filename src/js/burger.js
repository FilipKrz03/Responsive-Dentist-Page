const burger = document.getElementById('burger');
const links = document.getElementById('links');

burger.addEventListener('click' , () => {
    burger.classList.toggle('active');
    links.classList.toggle('active');
})