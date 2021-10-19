let titreIndex = document.getElementById("titreIndex");
let imageMachineMorse = document.getElementById("machineMorse");
let isAnimationStarted = false;
let titreLettre = 0;
let compteur = 0;

titreIndex.addEventListener("mouseover", () =>{
    if(!isAnimationStarted){
        isAnimationStarted = true;
        animationTitre();
    }
});

function animationTitre(){
    if(titreLettre < 5){
        switch(titreLettre){
            case 0:
                titreIndex.innerHTML = "M --- .-. ... .";
                imageMachineMorse.src = "../images/morseMachine2.png";
                break;
            case 1:
                titreIndex.innerHTML = "M O .-. ... .";
                imageMachineMorse.src = "../images/morseMachine2.png";
                break;
            case 2:
                titreIndex.innerHTML = "M O R ... .";
                imageMachineMorse.src = "../images/morseMachine2.png";
                break;
            case 3:
                titreIndex.innerHTML = "M O R S .";
                imageMachineMorse.src = "../images/morseMachine2.png";
                break;
            case 4:
                titreIndex.innerHTML = "M O R S E";
                imageMachineMorse.src = "../images/morseMachine2.png";
                break;
        }
        titreLettre++;
        setTimeout(() => {
            imageMachineMorse.src = "../images/morseMachine1.png";
        }, 150);
        setTimeout(() => {
            animationTitre();
        }, 250);
    }
}