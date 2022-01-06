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
// L'objet String permet de réaliser diverses opérations sur les chaines de caractères
//Grâce aux méthodes de l'object String, modifier notre chaîne de caractères pour arriver au résultat suivant :
//Ceci Est Un Exercice.

let mots = str.split(' ');

for (let index = 0; index < mots.length; index++) {
    mots[index] = mots[index][0].toUpperCase() + mots[index].substring(1);
}

str = mots.join(' ');
str = str.replace('Test', 'Exercice');

// L'objet Math permet de réaliser diverses opérations mathématiques
// Grâce à l'objet Math créer une fonction randomNum qui respectera l'exemple suivant :
// console.log(randomNum(20, 1))
// console.log(randomNum(1, 10))
// console.log(randomNum(6))
// console.log(randomNum())
// 4
// 1
// 2
// 0

function randomNum (min, max) {
    if (min == null && max == null) {
        return 0;
    }

    if (max == null) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
}

// L'objet Intl permet d'internationaliser des dates, nombres monnétaires, etc.
// grâce à Intl créer une constante objet qui permettra de formater un nombre entier donné
// en paramètre en Euro afin de respecter l'exemple suivant :
// console.log(euro.format(8000));
// console.log(euro.format(25));
// console.log(euro.format(99600023147));
// 8 000,00 €
// 25,00 €
// 99 600 023 147,00 €

const euro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR'
});