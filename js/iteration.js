function iterateur (start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let nbIt = 0;

    const iterator = {
        next () {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false }
                nextIndex += step;
                nbIt++;
            }
            else {
                result = { value: nextIndex, done: true }
            }
            return result;
        }
    }

    return iterator;
}

let it = iterateur(1, 10, 2);

let result = it.next();
while(!result.done) {
    // console.log(result.value);
    result = it.next();
}

function* idMaker () {
    let index = 0;
    while(true)
        yield index++;
}

let gen = idMaker();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

function* fibonacci () {
    let fn1 = 0;
    let fn2 = 1;
    while(true) {
        let current = fn1;
        fn1 = fn2;
        fn2 = fn1 + current;
        let reset = yield current;
        if (reset) {
            fn1 = 0;
            fn2 = 1;
        }
    }
}

let fib = fibonacci();

// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next().value);
// console.log(fib.next(true).value); //passer une valeur dans next() permet de la retrouver dans notre générateur (résultat de yield)
