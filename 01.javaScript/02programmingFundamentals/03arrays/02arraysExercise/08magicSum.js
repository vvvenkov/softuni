function magicSum(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6], 6)