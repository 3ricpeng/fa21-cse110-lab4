for (let x in statistics) {
    if (statistics[x] % 2 == 1 || x.startsWith('r')) {
        console.log(statistics[x]);
    }
}