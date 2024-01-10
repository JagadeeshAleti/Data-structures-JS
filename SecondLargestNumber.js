function secondLargetstNumber(array) {
    if (array.length <= 1) {
        return "No second largest number";
    }

    const uniqueArr = [...new Set(array)];
    uniqueArr.sort((a, b) => b - a);

    return uniqueArr[1];
}

console.log(secondLargetstNumber([15, 35, 25, 15, 30]));

function secondLargestNum(array) {
    if (array.length <= 1) {
        return "No second largest number";
    }

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            secondLargest = largest;
            largest = array[i];
        } else if (array[i] > secondLargest && array[i] !== largest) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

console.log(secondLargestNum([15, 35, 25, 15, 30, 35]));