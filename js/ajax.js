let ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if (ajax.readyState === 4) {
        console.log(ajax.responseText);
    }
}
ajax.open('GET', 'https://speed.hetzner.de/1GB.bin');
ajax.send();

ajax.addEventListener("progress", function(e){
    document.getElementById("percent").innerHTML = Math.floor(e.loaded / e.total * 100);
    document.getElementById("inner").style.width = Math.floor(e.loaded / e.total * 100) + '%';
});

//JSON.parse = transformer string en objet
//JSON.stringify = transformer objet en string