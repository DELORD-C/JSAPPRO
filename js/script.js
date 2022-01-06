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

let date = new Date;
//Gràce à l'object Date, afficher dans la console la date d'aujourd'hui au format : DD/MM/AAAA
console.log(date.toLocaleDateString());
console.log(('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear());

let str = 'Ceci est un test.';
//Grâce aux méthodes de l'object String, modifier notre chaîne de caractères pour arriver au résultat suivant :
//Ceci Est Un Exercice.

let mots = str.split(' ');

for (let index = 0; index < mots.length; index++) {
    mots[index] = mots[index][0].toUpperCase() + mots[index].substring(1);
}

str = mots.join(' ');
str = str.replace('Test', 'Exercice');

