class Anim {
    constructor () {
        this.state = 0;
    }

    play (choice, iaChoice, result) {
        this.state = 1;
        this.text();
        let thisTemp = this;
        setTimeout(function() {
            thisTemp.fight(choice, iaChoice, result);
        }, 1500);
    }

    text () {
        document.getElementById("text").innerHTML = "CHI"
        setTimeout(function() {
            document.getElementById("text").innerHTML = "FU"
            setTimeout(function() {
                document.getElementById("text").innerHTML = "MI"
                setTimeout(function() {              
                    document.getElementById("text").innerHTML = ""
                }, 500);
            }, 500);
        }, 500);
    }

    fight (choice, iaChoice, result) {
        document.getElementById("pGame").innerHTML = "<img src='img/" + choice + ".jpg'>";
        document.getElementById("iaGame").innerHTML = "<img src='img/" + iaChoice + ".jpg'>";
        let imgs = document.querySelectorAll(".gameContainer > img");
        let tempThis = this;
        setTimeout(function() {
            for ( let img of imgs) {
                img.style.opacity = 1;
                img.style.transition = "0.2s ease-in-out";
            }
            setTimeout(function() {
                imgs[0].style.marginTop = '50px';
                imgs[1].style.marginTop = '-50px';
                tempThis.fightResult(result, tempThis, imgs);
            }, 400);
        }, 50);
    }

    update (result) {
        switch (result) {
            case 1:
                document.getElementById('pScore').innerHTML = parseInt(document.getElementById('pScore').innerHTML) + 1
                break;

            case -1:
                document.getElementById('iaScore').innerHTML = parseInt(document.getElementById('iaScore').innerHTML) + 1
                break;
        
            default:
                break;
        }
        Chifumi.updateScores();
        this.reset();
    }

    reset () {
        let tempThis = this;
        setTimeout(function() {
            document.getElementById("text").innerHTML = "";
            document.getElementById("pGame").innerHTML = "";
            document.getElementById("iaGame").innerHTML = "";
            tempThis.state = 0;
        }, 2000);
    }

    fightResult (result, tempThis, imgs) {
        setTimeout(function() {
            tempThis.changeColor(result, imgs);
            imgs[0].style.marginTop = '0';
            imgs[1].style.marginTop = '0';
            setTimeout(function() {
                for ( let img of imgs) {
                    img.style.transition = "0.3s ease-in-out";
                    img.style.opacity = 0;
                }
                tempThis.displayResult(result, tempThis, imgs);
            }, 500);
        }, 200);
    }

    displayResult (result, tempThis, imgs) {
        setTimeout(function() {
            switch (result) {
                case 1:
                    document.getElementById("text").innerHTML = "VICTOIRE";
                    break;

                case -1:
                    document.getElementById("text").innerHTML = "DEFAITE";
                    break;
            
                default:
                    document.getElementById("text").innerHTML = "EGALITE";
                    break;
            }
            tempThis.update(result);
        }, 300);
    }

    changeColor(result, imgs) {
        switch (result) {
            case 1:
                imgs[0].style.filter = 'sepia(1) hue-rotate(-39deg) saturate(3)';
                imgs[1].style.filter = 'sepia(1) hue-rotate(48deg)';
                break;

            case -1:
                imgs[0].style.filter = 'sepia(1) hue-rotate(48deg)';
                imgs[1].style.filter = 'sepia(1) hue-rotate(-39deg) saturate(3)';
                break;
        
            default:
                break;
        }
    }
}