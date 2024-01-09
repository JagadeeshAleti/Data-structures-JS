//Fibnocci
function getFibnocciSeries(n) {
    const series = [0, 1];
    for (let i = 2; i <= n; i++) {
        const result = series[i - 2] + series[i - 1];
        series.push(result);
    }
    return series.join(" ");
}

function getFibnocciSeriesByRecursion(n, a = 0, b = 1, series = []) {
    if (n >= 0) {
        series.push(a);
        getFibnocciSeriesByRecursion(n - 1, b, a + b, series);
    }
    return series.join(" ");
}

console.log("Fibnoccie series :", getFibnocciSeries(10));
console.log("Fibnoccie series by recursion :", getFibnocciSeriesByRecursion(10));