function number_cardinality(n) {
    if(n % 2 === 0 && n % 10 === 0) {
        return "zero";
    }
    else if (n % 2 === 0) {
        return "even";
    }
    else if (n % 2 !== 0 && n % 5 === 0) {
        return "five";
    }
    else {
        return "odd";
    }
};

console.log(number_cardinality(100))
console.log(number_cardinality(88))
console.log(number_cardinality(155))
console.log(number_cardinality(99))