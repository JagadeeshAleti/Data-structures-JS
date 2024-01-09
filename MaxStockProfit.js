//Brute force
function maxProfit(array) {
    let globalProfit = 0;
    const length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            const currentProfit = array[j] - array[i];
            if (currentProfit > globalProfit) {
                globalProfit = currentProfit;
            }
        }
    }

    return globalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([9, 6, 4, 1]));

// Greedy algorithm
function maxProfitByGreedyAlgo(array) {
    let globalProfit = 0;
    let minStock = array[0];
    const length = array.length;

    for (let i = 1; i < length; i++) {
        if (array[i] < minStock) {
            minStock = array[i];
        }

        globalProfit = Math.max(globalProfit, array[i] - minStock)
    }

    return globalProfit
}

console.log(maxProfitByGreedyAlgo([7, 1, 5, 3, 6, 4]));
console.log(maxProfitByGreedyAlgo([9, 6, 4, 1]));
