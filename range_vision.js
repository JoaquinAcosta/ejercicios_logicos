//INCOMPLETO, PUDE CONVERTIR EL NÚMERO EN UN ARRAY

function range_vision(n){     
    let number = n.toString().split('').map( (x) => + x);
    return number

}

console.log(range_vision(34315));
