function extractIncreasingSubsetFromArray(arr) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    let subsetArr = [];

    for (let num of arr) {
        if (num >= biggestNum) {
            biggestNum = num;
            subsetArr.push(num);
        }
    }

    return subsetArr;

}

// or with .reduce method