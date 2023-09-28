<div class="settings-zone">
    <div class="settings-row">
        <div class="settings-sub-zone">
            <div class="settings-keys settings-key0"></div>
            <div class="settings-keys settings-key1"></div>
            <div class="settings-keys settings-key2"></div>
            <div class="settings-keys settings-key3"></div>
        </div>

        <div class="settings-sub-zone">
            <div class="settings-keys settings-key4"></div>
            <div class="settings-keys settings-key5"></div>
        </div>
    </div>

    <div class="settings-row">
        <div class="settings-keys settings-key5"></div>
    </div>
</div>

<script>
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
        xhr.open('GET', 'includes/settings.json');
        xhr.send();
    };
    getData(
        params,
        reponse => console.log(reponse),
        (status, statusText) => console.log(`${status} :: ${statusText}`)
    )
</script>