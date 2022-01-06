let map = new Map();
map.set("chien", "Médor");
map.set("chat", "Felix");
map.set("elephant", "Dumbo");
map.size; // 3
map.get("renard") // undefined
map.get("chat") // Felix
map.has("oiseau") // false
map.delete("chat");

for (let value of map) {
    // console.log(value);
}

for (let [index, value] of map) {
    // console.log(value);
}

let set = new Set();
set.add(1);
set.add("texte");
set.add("toto");

set.has(1); //true

for (let value of set) console.log(value);

let array = [1, 2, 3, 4, 5, 6];
let setFromArray = new Set(array);

// Si on souhaite vérifier si un élément existe déjà dans un tableau, on doit utiliser indexOf() qui peu diminuer les performances
// Dans un Set, on peut supprimer un élément directement avec sa valeur, alors que dans un tableau on devrait "découper" le tableau
// Dans un tableau, la valeur NaN ne peut être trouvée avec indexOf
// Set permet de stocker des valeurs uniques, il n'est donc pas nécessaire de'effectuer certaines validations manuellement