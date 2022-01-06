class Vehicule {
    constructor (nom) {
        this.nom = nom;
    }

    static vroom () {
        console.log('VROOM !');
    }
}

// let voiture = new Vehicule ('Renault');
// voiture.nom et voiture['nom'] renvoient tous deux à la propriété nom de l'objet voiture
// console.log(Vehicule.marque);
// Vehicule.vroom();

class Voiture extends Vehicule {
    constructor (nom, marque) {
        super(nom);
        this.marque = marque;
    }

    static vroom () {
        super.vroom();
        console.log('blbl..');
    }
}

let voiture = new Voiture('Titine', 'Renault');
console.log(voiture);

Voiture.vroom();