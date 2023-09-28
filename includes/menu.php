<div class="menu-close-zone"></div>

<div class="menu-button">
    <span class="menu-button-icon"></span>
    <span class="menu-button-icon"></span>
</div>

<div class="menu">
    <div class="menu-onglet menu-onglet-resume"><span class="menu-onglet-text">RESUME</span></div>
    <div class="menu-onglet menu-onglet-settings"><span class="menu-onglet-text">SETTINGS</span></div>
    <div class="menu-onglet menu-onglet-credits"><span class="menu-onglet-text">CREDITS</span></div>
</div>

<script>
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
</script>