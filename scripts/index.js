class Credits {
    static menuCredits = document.querySelector('.menu-onglet-credits');
    static creditsZone = document.querySelector('.credits-zone');

    static openClose(){
        addEventListener("keydown", (event) => {
            if (event.code == 'Escape')
                this.hide();
        });
        Menu.zoneClose.addEventListener("click", () => { this.hide() });
        Menu.menuResume.addEventListener("click", () => { this.hide() });
        Settings.menuSettings.addEventListener("click", () => { this.hide() });
        this.menuCredits.addEventListener("click", () => { this.hideShow() });
    }

    static hideShow(){
        this.creditsZone.classList.toggle('show-flex');
    }    
    static hide(){
        this.creditsZone.classList.remove('show-flex');
    }
}

class Settings {
    //        Parameters        //
    // DOM //
    static menuSettings = document.querySelector('.menu-onglet-settings');
    static settingsZone = document.querySelector('.settings-zone');
    static settingsKeys = document.querySelectorAll('.settings-keys');
    static settingsCams = document.querySelectorAll('.settings-cam');
    
    
    // Variales //
    static keysModify;
    static camsModify;

    //         Methods         //
    // Open and Close settings window //
    static openClose(){
        addEventListener("keydown", (event) => {
            if (event.code == 'Escape')
                this.hide();
        });
        Menu.zoneClose.addEventListener("click", () => { this.hide() });
        Menu.menuResume.addEventListener("click", () => { this.hide() });
        Credits.menuCredits.addEventListener("click", () => {this.hide() });
        this.menuSettings.addEventListener("click", () => { this.hideShow() });
    }

    static hideShow(){
        this.settingsZone.classList.toggle('show-flex');
    }    
    static hide(){
        this.settingsZone.classList.remove('show-flex');
    }

    //        Keys        //
    static keySwitch(event){
        switch(event.code) {
            case "Digit1": return "1";
            case "Digit2": return "2";
            case "Digit3": return "3";
            case "Digit4": return "4";
            case "Digit5": return "5";
            case "Digit6": return "6";
            case "Digit7": return "7";
            case "Digit8": return "8";
            case "Digit9": return "9";
            case "Digit0": return "0";
            case "Space": return "\u2423";
        }
        return event.key.toUpperCase();
    }

    static keysBehaviours(){
        addEventListener("keydown", (event) => {
            // Disable defaults behaviours like F3 activate research zone etc
            // event.preventDefault();
        }) 
    }

    static async getKeys() { // Get keys from .json as an array
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

    static modifyKey(){
        // Onclick the keyArea becomes empty and we save 
        document.addEventListener("click", (elem) => {
            if (elem.target.classList.contains('settings-keys')) {
                elem.target.textContent = '';
                this.keyModified = elem.target;
                this.keysId = elem.target.id.substring(3);
            }
        });
        addEventListener("keydown", (event) => {
            if(this.keyModified){
                let keyValue = this.keySwitch(event);
                this.keyModified.textContent = keyValue;
                this.keyDatas = {
                    key : keyValue,
                    input : event.code
                }
                this.sendKey();
                delete(this.keyModified);
            }
        })
    }

    static async sendKey(){
        let datas = {
            keyDatas : this.keyDatas,
            keyId : this.keysId
        }
        
        await fetch('scripts/modifyKey.php', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body : JSON.stringify(datas)
        });
        this.keysModify = true;
    }

    // Fill settings keys
    static async fillKeys(){
        await this.getKeys();
        let i = 0;
        this.settingsKeys.forEach(key => {
            key.textContent = this.keys[i].key;
            i += this.keys[i].probability;
        })
    }

    //      Cameras       //
    static async getCams() { // Get cams from .json as an array
        if(!this.cams || this.camsModify) { // If cams are undefined or modified
            const rep = await fetch('players_datas/cam.json');
            const json = await rep.json();
            let cams = [];
            json.forEach(elem => {
                cams.push(elem);
            });
            this.camsModify = false;
            this.cams = cams;
        }
    };

    static modifyCam(){
        // Onclick the camArea becomes empty and we save 
        document.addEventListener("click", (elem) => {
            if (elem.target.classList.contains('settings-cam')) {
                elem.target.textContent = '';
                this.camModified = elem.target;
                this.camId = elem.target.id.substring(3);
            }
        });
        addEventListener("keydown", (event) => {
            if(this.camModified){
                let keyValue = this.keySwitch(event);
                this.camModified.textContent = keyValue;
                this.camDatas = {
                    key : keyValue,
                    input : event.code
                };
                this.sendCam();
                delete(this.camModified);
            }
        })
    }

    static async sendCam(){
        let datas = {
            camDatas : this.camDatas,
            camId : this.camId
        }
        console.log(JSON.stringify(datas));
        
        await fetch('scripts/modifyCam.php', {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body : JSON.stringify(datas)
        });
        this.camsModify = true;
    }

    static async fillCams(){
        await this.getCams();
        let i = 0;
        this.settingsCams.forEach(cam => {
            cam.textContent = this.cams[i].key;
            i++;
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
        
        this.menuResume.addEventListener("click", () => { this.hideShow() });
        this.menuOpen.addEventListener("click", () => { this.hideShow() });
    }

    static hideShow(){
        this.menuOpen.classList.toggle('hide');
        this.menu.classList.toggle('show-flex');
        this.zoneClose.classList.toggle('show-flex');
    }
};

class Targets {
    //        Parameters        //
    static board = document.querySelector('.board');

    static hitSound = new Audio('sounds/hitSound.mp3');

    static targets = [];

    //         Methods         //
    // Targets //
    static create(nb){ // Setting up the target
        for(let i = 0; i < nb; i++){
            let target = document.createElement('div');
            this.board.appendChild(target);
            target.classList.add('target');
            target.id = `target${i}`;
            this.targets.push(target.id);
            this.getRandomCoord(target);
            this.getRandomContent(target);
        }
    }

    static hit() { // When target is hit, her settings are reset
        function hitResponse(type, event){
            Targets.targets.forEach((elem) => { // For each target
                let target = document.getElementById(elem); // target = one of the targets generated

                let conditions = { 
                    key : event.code == target.keyCode && target.matches(':hover'),
                    mouse : event.button == 2 && target.matches(':hover') && target.keyCode === "RightClick"
                };
                
                if(conditions[type]){ // If one of conditions above
                    Targets.despawn(target);
                    setTimeout(() => {
                        Targets.getRandomCoord(target);
                        Targets.getRandomContent(target);
                        Targets.spawn(target);
                    }, 200);
                }
            });
        }
        addEventListener("keydown", (event) => {
            if(event.repeat){ return }; // Avoid key to be held down
            hitResponse("key", event);
        });
        addEventListener("mousedown", (event) => { 
            hitResponse("mouse", event) 
        });
    }

    static despawn(target){
        this.hitSound.play();
        target.classList.add('target-hit');
        target.style.pointerEvents = "none"; // Avoid spam to destroy next target before target despawned
        setTimeout(() => {
            target.classList.remove('target-hit');
        }, 200);
    }

    static spawn(target) {
        target.classList.add('target-spawn');
        setTimeout(() => {
            target.classList.remove('target-spawn');
            target.style.pointerEvents = "auto";
        }, 200);
    }

    // Target content attribution
    static async getRandomContent(target){ 
        await Settings.getKeys();
        let index = this.getRandomInt(Settings.keys.length);
        target.textContent = Settings.keys[index].key;
        target.keyCode = Settings.keys[index].input;
    }
    
    // Target coord attribution
    static getRandomCoord(target){
        let topInt = this.getRandomInt(80);
        let leftInt = this.getRandomInt(90);
        target.style.top = "calc(" + topInt + "% + 10%";
        target.style.left = "calc(" + leftInt + "% + 5%";
    }

    // Random int between 0 and max
    static getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
};


class Score {
    
}




//       Options        //
document.oncontextmenu = function() { return false };
Settings.keysBehaviours();

//      Interface       //
Credits.openClose();
Settings.openClose();
Menu.openClose();

//        Keys          //
Settings.modifyKey();
Settings.getKeys();
Settings.fillKeys();

//        Cams          //
Settings.modifyCam();
Settings.getCams();
Settings.fillCams();

//        Board         //
Targets.create(4);
Targets.hit();
