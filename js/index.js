burger= document.querySelector('.burger')
ul= document.querySelector('.v-class-resp')
container= document.querySelector('.h-nav-resp')

burger.addEventListener('click',()=>
{
    ul.classList.toggle('v-class-resp');
    container.classList.toggle('h-nav-resp');
});