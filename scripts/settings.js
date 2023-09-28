window.addEventListener("load", initSettings);

function initSettings(e){
    // Gestion ouverture fermeture des Settings
    var menuSettings = document.querySelector('.menu-onglet-settings');
    var settingsZone = document.querySelector('.settings-zone');
    var zoneClose = document.querySelector('.menu-close-zone');
    var menuResume = document.querySelector('.menu-onglet-resume');
    
    function settingsOpenClose(){
        settingsZone.classList.toggle('show-flex');
    }
    
    function settingsClose(){
        settingsZone.classList.remove('show-flex');
    }
    
    addEventListener("keydown", (event) => {
        if (event.code == 'Escape'){
            settingsClose();
        }
    });
    zoneClose.addEventListener("click", settingsClose);
    menuResume.addEventListener("click", settingsClose);
    menuSettings.addEventListener("click", settingsOpenClose);
}