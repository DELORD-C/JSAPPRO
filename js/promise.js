const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Test');
        reject('Erreur');
    }, 500)
});

console.log(promise);

// promise.then((value) => {
    // console.log(value);
    // console.log(promise);
// });
//promise.then est executée lorsque resolve est appellée dans promise

promise.catch((value) => {
    // console.log(value);
    // console.log(promise);
});
//promise.catch est executée lorsque reject est appellée dans promise

async function test () {
    await timeout(500);
}

test().then(function() {
    console.log('b');
});

function timeout(ms) {
    return new Promise(resolve => setTimeout(function(){
        console.log('a');
        resolve();
    }, ms))
}

