function curry(fn) {
    var args = [].slice.call(arguments, 1);

    function curried(fnArgs) {
        if (fnArgs.length >= fn.length) {
            return fn.apply(null, fnArgs);
        }

        return function () {
            return curried(fnArgs.concat([].slice.apply(arguments)));
        };
    }

    return curried(args);
}

const match = curry((what, s) => s.match(what));
const replace = curry((what, replacement, s) => s.replace(what, replacement));
const filter = curry((f, xs) => xs.filter(f));
const map = curry((f, xs) => xs.map(f));
