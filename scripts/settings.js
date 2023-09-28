// Gestion ouverture fermeture des Settings
var menuSettings = document.querySelector('.menu-onglet-settings');
var settingsZone = document.querySelector('.settings-zone');

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

// Gestion des keys
function getData(params, succes, echec) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) succes();
        else echec(xhr.status, xhr.statusText);
    };
    xhr.open('GET', 'players_datas/settings.json');
    xhr.send();
};
getData(
    params,
    reponse => console.log(reponse),
    (status, statusText) => console.log(`${status} :: ${statusText}`)
);