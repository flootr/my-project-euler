"use strict";

function multiples(max) {
    let n = 0;
    let sum = 0;

    do {
        if (n % 3 === 0 || n % 5 === 0) {
            sum += n;
        }

        n++;
    } while (n < max);

    return sum;
}

const sum = multiples(1000);
console.log(sum);
