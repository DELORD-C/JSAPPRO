class Generator {
    static p1 = "Bonjour !";
    static p2 = "Coucou !";
    static p3 = "Hello !";
    static p4 = "Ola !";
    static select(ar) {
        return ar[Math.floor(Math.random() * (ar.length))];
    }
    static random() {
        let elem = document.getElementById("par");
        let ar = [this.p1, this.p2, this.p3, this.p4];
        elem.innerHTML = this.select(ar);
    }
    static modif() {
        let elem = document.getElementById("par");
        let ar = [this.p1, this.p2, this.p3, this.p4];
        const index = ar.indexOf(elem.innerHTML);
        if (index > -1) {
          ar.splice(index, 1);
        }
        elem.innerHTML = this.select(ar);
    }
}