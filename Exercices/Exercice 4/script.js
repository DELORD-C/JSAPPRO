let timing = setInterval(() => {
    changeImg();
}, 2000)
let state = 1;

function stopStart() {
    if (1 === state) {
        clearInterval(timing);
        state = 0;
    }
    else {
        timing = setInterval(() => {
            changeImg();
        }, 2000)
        state = 1;
    }
}

function changeImg () {
    if (document.getElementById('img').getAttribute('src') == 'feuille.jpg') {
        document.getElementById('img').setAttribute('src', 'ciseaux.jpg')
    }
    else {
        document.getElementById('img').setAttribute('src', 'feuille.jpg')
    }
}


//ex 4
function job() {
    return new Promise(resolve => setTimeout(function(){
        resolve('Hello World');
    }, 2000))
}