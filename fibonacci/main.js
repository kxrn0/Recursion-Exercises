function fibs(n) {
    const numbers = [];
    let first, second, temp;

    first = 0;
    second = 1;

    for (let i = 0; i < n; i++) {
        numbers.push(first);
    
        temp = first;
        first = second;
        second += temp;
    }
    return numbers;
}

//console.log(fibs(10));

function fibsRec(n, n_1 = 0, n_2 = 1, array = []) {
    if (n < 1)
        return array;
    array.push(n_1);
    n_1 = n_2;
    n_2 = n_2 + array[array.length - 1];
    return fibsRec(n - 1, n_1, n_2, array);
} 

console.log(fibsRec(100));
