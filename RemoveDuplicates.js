function removeDuplicates(arr) {
    const uniqueElements = {};
    const result = [];

    for (const item of arr) {
        if (!uniqueElements[item]) {
            result.push(item);
            uniqueElements[item] = true;
        }
    }

    return result;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 3, 2, 4]));