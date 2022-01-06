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
// chien.presentation();

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
Object.assign(target, source);
//Object.assign(cible, source) permet de copier les attributs de l'objet source dans l'objet cible (remplace)