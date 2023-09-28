window.addEventListener("load", init);

function init(e){
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
    
    // Attribution du contenu de la cible
    function getRandomContent(e){
        // let index = getRandomInt(keys.length);
        // target.textContent = keys[index][0];
        // target.targetKeyCode = keys[index][1];
    } 

    // Entier random entre 0 et max
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}



