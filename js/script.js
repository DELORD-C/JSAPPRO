class Animal {
    constructor(nom, type) {
        this.nom = nom;
        this.type = type;
    }

    presentation () {
        console.log(this.nom + ' ' + this.type);
    }
}

let chien = new Animal('Rex', 'Chien');
chien.presentation();