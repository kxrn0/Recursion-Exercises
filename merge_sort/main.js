function merge(left, right, array) {
    let leftIndex, rightIndex, arrayIndex;

    leftIndex = 0;
    rightIndex = 0;
    arrayIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) 
            array[arrayIndex++] = left[leftIndex++];
        else 
            array[arrayIndex++] = right[rightIndex++];
    }
    while (leftIndex < left.length) 
        array[arrayIndex++] = left[leftIndex++];
    while (rightIndex < right.length) 
        array[arrayIndex++] = right[rightIndex++];
}

function merge_sort(array) {
    if (array.length <= 1)
        return;

    let left, right;

    left = array.slice(0, ~~(array.length / 2));
    right = array.slice(~~(array.length / 2));

    merge_sort(left);
    merge_sort(right);

    merge(left, right, array);
}

let array = [4, 3, 8, 2, 7, 1, 5, 6, 0, 9];

merge_sort(array);
console.log(array);


