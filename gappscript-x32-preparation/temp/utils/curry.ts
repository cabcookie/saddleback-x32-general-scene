function curry(fn) {
    const args = [].slice.call(arguments, 1);
    const curried = (fnArgs) => {
        if (fnArgs.length >= fn.length) {
            return fn.apply(null, fnArgs);
        }
        return () => curried(fnArgs.concat([].slice.apply(arguments)));
    };
    return curried(args);
}

const prematch: (what: any, str: string) => string[] = (what, str) => str.match(what);
const match = curry(prematch);
const prereplace: (what: string, replacement: string, str: string) => string =
    (what, replacement, str) => str.replace(what, replacement);
const replace = curry(prereplace);
const prefilter: (fn: (value: any, index?: number, arr?: any[]) => any, arr: any[]) => any[] =
    (fn, arr) => arr.filter(fn);
const filter = curry(prefilter);
const premap: (fn: (value: any, index?: number, arr?: any[]) => any, arr: any[]) => any[] =
    (fn, arr) => arr.map(fn);
const map = curry(premap);
