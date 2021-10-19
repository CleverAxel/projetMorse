class ConvertToAlphabetMorse{
    constructor(){
        //
    }
    convertToAlphabetMorse(){
        let i = 0;
        let tailleTexte = texteRecu.length;
        let texteConvertiMorse = "";

        for(i = 0; i < tailleTexte; i++){
            switch(texteRecu[i]){
                case 'a':
                    texteConvertiMorse += ".- ";
                    break;
                case 'b':
                    texteConvertiMorse += "-... ";
                    break;
                case 'c':
                    texteConvertiMorse += "-.-. ";
                    break;
                case 'd':
                    texteConvertiMorse += "-.. ";
                    break;
                case 'e':
                    texteConvertiMorse += ". ";
                    break;
                case 'f':
                    texteConvertiMorse += "..-. ";
                    break;
                case 'g':
                    texteConvertiMorse += "--. ";
                    break;
                case 'h':
                    texteConvertiMorse += ".... ";
                    break;
                case 'i':
                    texteConvertiMorse += ".. ";
                    break;
                case 'j':
                    texteConvertiMorse += ".--- ";
                    break;
                case 'k':
                    texteConvertiMorse += "-.- ";
                    break;
                case 'l':
                    texteConvertiMorse += ".-.. ";
                    break;
                case 'm':
                    texteConvertiMorse += "-- ";
                    break;
                case 'n':
                    texteConvertiMorse += "-. ";
                    break;
                case 'o':
                    texteConvertiMorse += "--- ";
                    break;
                case 'p':
                    texteConvertiMorse += ".--. ";
                    break;
                case 'q':
                    texteConvertiMorse += "--.- ";
                    break;
                case 'r':
                    texteConvertiMorse += ".-. ";
                    break;
                case 's':
                    texteConvertiMorse += "... ";
                    break;
                case 't':
                    texteConvertiMorse += "- ";
                    break;
                case 'u':
                    texteConvertiMorse += "..- ";
                    break;
                case 'v':
                    texteConvertiMorse += "...- ";
                    break;
                case 'w':
                    texteConvertiMorse += ".-- ";
                    break;
                case 'x':
                    texteConvertiMorse += "-..- ";
                    break;
                case 'y':
                    texteConvertiMorse += "-.-- ";
                    break;
                case 'z':
                    texteConvertiMorse += "--.. ";
                    break;
                case ' ':
                    texteConvertiMorse += " / ";
                    break;
            }
        }
        return texteConvertiMorse;
    }
}

class ConvertToSound{
    constructor(){
        this.indice = 0;
        this.longueurCodeMorse = 0;
    }

    initConvertSound(){
        this.indice = 0;
        this.longueurCodeMorse = texteModifMorse.length;
        this.convertSound();
    }

    convertSound(){
        if(this.indice < this.longueurCodeMorse){
            switch(texteModifMorse[this.indice]){
                case '.':
                    this.playDot();
                    break;
                case '-':
                    this.playDash();
                    break;
                case ' ':
                    this.playSpace();
                    break;
                case '/':
                    this.playSpace();
                    break;
            }
        }
    }

    playDot(){
        dot.play();
        this.indice++;

        imageDesk.src = "../images/desk2.png";

        setTimeout(() => {
            imageDesk.src = "../images/desk1.png";
        }, DOT_TIMER-100);


        setTimeout(() => {
            this.convertSound();
        }, DOT_TIMER);
    }

    playDash(){
        dash.play();
        this.indice++;

        imageDesk.src = "../images/desk2.png";

        setTimeout(() => {
            imageDesk.src = "../images/desk1.png";
        }, DASH_TIMER-100);        

        setTimeout(() => {
            this.convertSound();
        }, DASH_TIMER);
    }

    playSpace(){
        this.indice++;

        setTimeout(() => {
            this.convertSound();
        }, SPACE_TIMER);
    }
}

const DOT_TIMER = 375;
const DASH_TIMER = 750;
const SPACE_TIMER = 200;

let sendInput = document.getElementById("sendInput");
let inputTexte = document.getElementById("inputTexte");
let outputMessageConverti = document.getElementById("outputMessageConverti");
let imageDesk = document.getElementById("desk");
let outputContainer = document.getElementById("outputContainer");
let readMorse = document.getElementById("readMorse");

let texteRecu = "";
let texteModifMorse = "";

let dot = new Audio("../sound/sound_dot.ogg");
let dash = new Audio("../sound/sound_dash.ogg");

let convertToAlphabetMorse = new ConvertToAlphabetMorse();
let convertToSound = new ConvertToSound();


sendInput.addEventListener("click", () =>{
    texteRecu = inputTexte.value;
    if(texteRecu == ""){
        outputContainer.style.display = "none";
    } else{
        texteRecu = texteRecu.toLowerCase();
        texteModifMorse = convertToAlphabetMorse.convertToAlphabetMorse();
        outputMessageConverti.innerHTML = texteModifMorse;
        outputContainer.style.display = "flex";
    }

});

readMorse.addEventListener("click", () =>{
    convertToSound.initConvertSound();
});