
const burger = document.querySelector('.burger')
const closebtn = document.querySelector('.menu__close')
const overllay = document.querySelector('.overllay')
const menu = document.querySelector('.menu')
const filterbut = document.querySelector('.filter__but')
const filteroverllay = document.querySelector('.filter__overllay')

let isOpen = false;

burger.addEventListener('click', () => {
            isOpen = !isOpen
            overllay.classList.toggle('open')
        if(isOpen){
            //document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }  

})
    
        closebtn.addEventListener('click', () => {
            overllay.classList.remove('open')
            document.body.style.overflow = 'auto'
        });

filterbut.addEventListener('click', () => {
            isOpen = !isOpen
            filteroverllay.classList.toggle('open')
        if(isOpen){
            document.body.style.overflow = 'hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }  

})