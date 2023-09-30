class Settings {
    // Gestion ouverture fermeture des Settings
    static menuSettings = document.querySelector('.menu-onglet-settings');
    static settingsZone = document.querySelector('.settings-zone');
    // Fonction initialisation des settings
    static initSettings(e){
        addEventListener("keydown", (event) => {
            if (event.code == 'Escape'){
                this.settingsClose();
            }
        });
        Menu.zoneClose.addEventListener("click", () => { this.settingsClose() });
        Menu.menuResume.addEventListener("click", () => { this.settingsClose() });
        this.menuSettings.addEventListener("click", () => { this.settingsOpenClose() });
    }

    // Fonctions ouvrir fermer
    static settingsOpenClose(){
        this.settingsZone.classList.toggle('show-flex');
    }
    
    static settingsClose(){
        this.settingsZone.classList.remove('show-flex');
    }
};

class Menu {
    static menu = document.querySelector('.menu');
    static menuOpen = document.querySelector('.menu-button');
    static zoneClose = document.querySelector('.menu-close-zone');
    static menuResume = document.querySelector('.menu-onglet-resume');

    static initMenu(e){
        addEventListener("keydown", (event) => {
            if (event.code == 'Escape'){
                this.menuOpenClose();
            }
        });
        
        this.zoneClose.addEventListener("click", () => { this.menuOpenClose() });
        this.menuResume.addEventListener("click", () => { this.menuOpenClose() });
        this.menuOpen.addEventListener("click", () => { this.menuOpenClose() });
    }

    static menuOpenClose(){
        this.menuOpen.classList.toggle('hide');
        this.menu.classList.toggle('show-flex');
        this.zoneClose.classList.toggle('show-flex');
    }
};

class Index {
    static board = document.querySelector('.board'); 
    static target = document.createElement('div');
    static initBoard(e){
        // Création de la cible
        this.board.appendChild(this.target);
        this.target.classList.add('target');
        this.getRandomCoord();
        this.getRandomContent();
        // Quand la cible est touchée
        addEventListener("keydown", (event) => {
            if(event.code == this.target.targetKeyCode && this.target.matches(':hover')){
                this.getRandomCoord();
                this.getRandomContent();
            }
        });
        addEventListener("mousedown", () => {
    
        });
    }
    
    // Attribution des coordonnées de la cible
    static getRandomCoord(e){
        let topInt = this.getRandomInt(80);
        let leftInt = this.getRandomInt(90);
        this.target.style.top = "calc(" + topInt + "% + 10%";
        this.target.style.left = "calc(" + leftInt + "% + 5%";
    }
    
    // Récupération des keys du player
    static async getPlayerKeys() {
        const rep = await fetch('players_datas/keys.json');
        const json = await rep.json();
        let keys = [];
        json.forEach(elem => {
            for(let i = 0; i < elem.probability; i++)
                keys.push(elem);
        });
        return keys;
    };
    
    // Attribution du contenu de la cible
    static async getRandomContent(e){
        let playerKeys = await this.getPlayerKeys();
        let index = this.getRandomInt(playerKeys.length);
        this.target.textContent = playerKeys[index].key;
        this.target.targetKeyCode = playerKeys[index].input;
    } 
    
    // Entier random entre 0 et max
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
};


Settings.initSettings();
Menu.initMenu();
Index.initBoard();
