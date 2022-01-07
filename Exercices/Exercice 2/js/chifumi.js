class Chifumi {
    static possib = ['pierre', 'feuille', 'ciseaux'];
    static plays = plays;

    static play (choice) {
        if (anim.state === 1) {
            return;
        }
        const iaChoice = this.possib[Math.floor(Math.random() * this.possib.length)];
        let result = this.plays[choice][iaChoice];
        anim.play(choice, iaChoice, result);
    }

    static updateScores () {
        localStorage.setItem('pScore', parseInt(document.getElementById('pScore').innerHTML));
        localStorage.setItem('iaScore', parseInt(document.getElementById('iaScore').innerHTML));
    }

    static loadScores () {
        if (localStorage.getItem('pScore') != null) {
            document.getElementById('pScore').innerHTML = localStorage.getItem('pScore');
        }
        if (localStorage.getItem('iaScore') != null) {
            document.getElementById('iaScore').innerHTML = localStorage.getItem('iaScore');
        }
    }
}

let anim = new Anim;
Chifumi.loadScores();
console.log(window);