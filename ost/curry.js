var curry = function() {
    var fn = this,
        curriedArgs = Array.prototype.slice.call(arguments, 0);

    if (curriedArgs.length >= fn.length) {
        return fn.apply(fn, curriedArgs);
    }

    return function recur() {
        curriedArgs = curriedArgs.concat(Array.prototype.slice.call(arguments, 0));

        if (curriedArgs.length >= fn.length) {
            return fn.apply(fn, curriedArgs);
        }

        return recur;
    };
};

function abc(a, b, c) {
    return a + b + c;
}

function abcdef(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

abc.curry = curry;
abcdef.curry = curry;

console.log(abc.curry('A')('B')('C')); // 'ABC'
console.log(abc.curry('A', 'B')('C')); // 'ABC'
console.log(abc.curry('A', 'B', 'C')); // 'ABC'

console.log(abcdef.curry('A')('B')('C')('D')('E')('F')); // 'ABCDEF'
console.log(abcdef.curry('A', 'B', 'C')('D', 'E', 'F')); // 'ABCDEF'