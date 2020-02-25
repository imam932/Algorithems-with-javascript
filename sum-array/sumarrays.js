function sum(array) {
    let element = 0
    for (let i = 0; i < array.length; i++) {
        element = element + array[i];
    }
    return element
}

console.log(sum([52,42,12]));
