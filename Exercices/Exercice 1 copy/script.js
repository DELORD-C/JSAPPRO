class Generator {
    static ar = [
        "Bonjour !",
        "Coucou !",
        "Hello !",
        "Ola !"
    ];

    static select(exclu = null) {
        let index = Math.floor(Math.random() * (this.ar.length));
        if (exclu == index) {
            return this.select(exclu);
        }
        return [index];
    }

    static create() {
        let elem = document.getElementById("par");
        let paragraph = document.createElement('p');
        let random = this.select();
        paragraph.innerHTML = this.ar[random];
        paragraph.setAttribute('num', random);
        elem.append(paragraph);
    }

    static modif() {
        let elems = document.getElementById("par").childNodes;
        for (let i = 0; i < elems.length; i++) {
            let num = elems[i].getAttribute('num');
            let random = this.select(num);
            elems[i].innerHTML = this.ar[random];
            elems[i].setAttribute('num', random);
        }
    }
}