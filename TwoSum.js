//First approach
function twoSum(array, target) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            if (array[i] + array[j] === target) {
                return [i, j]
            }
        }
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 17));

//Second approach
function twoSumBest(array, target){
    const store = {};
    
    for(let i=0; i<array.length; i++){
        const sub = target - array[i];
        if(store[sub] !== undefined) {
            return [store[sub], i]
        }
        store[array[i]] = i;
    }

    return [];
}

console.log(twoSumBest([2, 7, 11, 15], 19));
