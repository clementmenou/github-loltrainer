class Settings {
    //        Parameters        //
    // DOM //
    static menuSettings = document.querySelector('.menu-onglet-settings');
    static settingsZone = document.querySelector('.settings-zone');
    static settingsKeys = document.querySelectorAll('.settings-keys');
    
    // Variales //
    static keysModify;

    //         Methods         //
    // Open and Close settings window //
    static openClose(){
        addEventListener("keydown", (event) => {
            if (event.code == 'Escape')
                this.hide();
        });
        Menu.zoneClose.addEventListener("click", () => { this.hide() });
        Menu.menuResume.addEventListener("click", () => { this.hide() });
        this.menuSettings.addEventListener("click", () => { this.hideShow() });
    }

    static hideShow(){
        this.settingsZone.classList.toggle('show-flex');
    }    
    static hide(){
        this.settingsZone.classList.remove('show-flex');
    }

    // Modify settings //
    static async getPlayerKeys() { // Get keys from .json as an array
        if(!this.keys || this.keysModify) { // If keys are undefined or modified
            const rep = await fetch('players_datas/keys.json');
            const json = await rep.json();
            let keys = [];
            json.forEach(elem => {
                keys.push(elem);
                for(let i = 1; i < elem.probability; i++)
                    keys.push({
                        key: elem.key,
                        input : elem.input
                    });
            });
            this.keysModify = false;
            this.keys = keys;
        }
    };

    static modifyPlayerKey(){
        // Onclick the keyArea becomes empty and we save 
        document.addEventListener("click", (elem) => {
            if (elem.target.classList.contains('settings-keys')) {
                elem.target.textContent = '';
                this.keyModified = elem.target;
                this.keysId = elem.target.id.substr(-1);
            }
        });
        addEventListener("keydown", (event) => {
            if(this.keyModified){
                this.keyModified.textContent = event.key.toUpperCase();
                this.keyDatas = event;
                this.sendPlayerKey();
                delete(this.keyModified);
            }
        })
    }

    static async sendPlayerKey(){
        let datas = {
            keyDatas : { 
                key : this.keyDatas.key.toUpperCase(),
                input : this.keyDatas.code
            },
            keyId : this.keysId
        }
        
        await fetch('scripts/modifyKey.php', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body : JSON.stringify(datas)
        });
    }

    // Fill settings keys
    static async fillPlayerKeys(){
        await this.getPlayerKeys();
        let i = 0;
        this.settingsKeys.forEach(key => {
            key.textContent = this.keys[i].key;
            i += this.keys[i].probability;
        })
    }
};


class Menu {
    //        Parameters        //
    static menu = document.querySelector('.menu');
    static menuOpen = document.querySelector('.menu-button');
    static zoneClose = document.querySelector('.menu-close-zone');
    static menuResume = document.querySelector('.menu-onglet-resume');

    //         Methods         //
    // Open and Close menu //
    static openClose(){
        addEventListener("keydown", (event) => {
            if (event.code == 'Escape')
                this.hideShow();
        });
        
        this.zoneClose.addEventListener("click", () => { this.hideShow() });
        this.menuResume.addEventListener("click", () => { this.hideShow() });
        this.menuOpen.addEventListener("click", () => { this.hideShow() });
    }

    static hideShow(){
        this.menuOpen.classList.toggle('hide');
        this.menu.classList.toggle('show-flex');
        this.zoneClose.classList.toggle('show-flex');
    }
};

class Index {
    //        Parameters        //
    static board = document.querySelector('.board'); 
    static target = document.createElement('div');

    //         Methods         //
    // Targets //
    static createTargets(){ // Setting up the target
        this.board.appendChild(this.target);
        this.target.classList.add('target');
        this.getRandomCoord();
        this.getRandomContent();
    }

    static async getRandomContent(){ // Target content attribution
        await Settings.getPlayerKeys();
        let index = this.getRandomInt(Settings.keys.length);
        this.target.textContent = Settings.keys[index].key;
        this.target.targetKeyCode = Settings.keys[index].input;
    }

    static targetHit() { // When target is hit, her settings are reset
        addEventListener("keydown", (event) => {
            if(event.code == this.target.targetKeyCode && this.target.matches(':hover')){
                this.getRandomCoord();
                this.getRandomContent();
            }
        });
        addEventListener("mousedown", (mouse) => {
            if(mouse.button == 2 && this.target.matches(':hover') && this.target.targetKeyCode === "RightClick"){
                this.getRandomCoord();
                this.getRandomContent();
            }
        });
    }
    
    // Attribution des coordonnées de la cible
    static getRandomCoord(){
        let topInt = this.getRandomInt(80);
        let leftInt = this.getRandomInt(90);
        this.target.style.top = "calc(" + topInt + "% + 10%";
        this.target.style.left = "calc(" + leftInt + "% + 5%";
    }

    // Random int between 0 and max
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
};




//       Options        //
document.oncontextmenu = function() { return false };

//      Interface       //
Settings.openClose();
Menu.openClose();

//        Keys          //
Settings.getPlayerKeys();
Settings.modifyPlayerKey();
Settings.fillPlayerKeys();

//        Board         //
Index.createTargets();
Index.targetHit();
