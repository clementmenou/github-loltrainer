var menu = document.querySelector('.menu');
var menuOpen = document.querySelector('.menu-button');
var zoneClose = document.querySelector('.menu-close-zone');
var menuResume = document.querySelector('.menu-onglet-resume');

function menuOpenClose(){
    menuOpen.classList.toggle('hide');
    menu.classList.toggle('show-flex');
    zoneClose.classList.toggle('show-flex');
}

addEventListener("keydown", (event) => {
    if (event.code == 'Escape'){
        menuOpenClose();
    }
});

zoneClose.addEventListener("click", menuOpenClose);
menuResume.addEventListener("click", menuOpenClose);
menuOpen.addEventListener("click", menuOpenClose);