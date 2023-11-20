const burger = document.querySelector('#burger');
const nav = document.querySelector('#nav');

window.onload=function(){
    burger.addEventListener('click', () => {
        if(nav.classList.contains('hidden')) {
            nav.classList.remove('hidden');
        }
        else
        {
            nav.classList.add('hidden');
        }
    });
}
