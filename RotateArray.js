function rotateArray(array, r) {
    const length = array.length;
    if (r > length) {
        r = r % length;
    }

    const subArray = array.splice(array.length - r);
    array.unshift(...subArray);
    return array;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 8));

function rotateArrayByRecursion(array, r) {
    const length = array.length;
    if (r > length) {
        r = r % length;
    }

    reverseArray(array, 0, length - 1);
    reverseArray(array, 0, r - 1);
    return reverseArray(array, r, length - 1);

}

function reverseArray(array, left, right) {
    while (left < right) {
        let temp = array[left];
        array[left++] = array[right];
        array[right--] = temp;
    }

    return array;
}

console.log(rotateArrayByRecursion([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrayByRecursion([1, 2, 3, 4, 5, 6, 7], 8));