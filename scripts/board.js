window.addEventListener("load", initBoard);

function initBoard(e){
    // Elements HTML
    var board = document.querySelector('.board');
    var target = document.createElement('div');
    // Création de la cible
    board.appendChild(target);
    target.classList.add('target');
    getRandomCoord();
    getRandomContent();
    // Quand la cible est touchée
    addEventListener("keydown", (event) => {
        if(event.code == target.targetKeyCode && target.matches(':hover')){
            getRandomCoord();
            getRandomContent();
        }
    });
    addEventListener("mousedown", () => {

    });

    // Attribution des coordonnées de la cible
    function getRandomCoord(e){
        let topInt = getRandomInt(80);
        let leftInt = getRandomInt(90);
        target.style.top = "calc(" + topInt + "% + 10%";
        target.style.left = "calc(" + leftInt + "% + 5%";
    }
    
    // Récupération des keys du player
    async function getPlayerKeys() {
        const rep = await fetch('players_datas/keys.json');
        const json = await rep.json()
        console.log(json);
        return json;
    };

    // Attribution du contenu de la cible
    async function getRandomContent(e){
        let playerKeys = await getPlayerKeys();
        let index = getRandomInt(playerKeys.length);
        target.textContent = playerKeys[index].key;
        target.targetKeyCode = playerKeys[index].input;
    } 

    // Entier random entre 0 et max
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}



