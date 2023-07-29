function bombNumber(arr1, arr2) {
    let power = arr2.pop();
    let specialNumber = arr2.pop();
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        let curNumber = Number(arr1[i]);
        if (curNumber === specialNumber) {
            arr1.splice(i, i - power + 1);
            arr1.splice(i - power, i)
            break;
        }
    }
    console.log(arr1);
    for (let el of arr1) {
        sum += el;
    }
    console.log(sum);
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])
bombNumber([1, 4, 4, 2, 8, 9, 1],
    [9, 3])
bombNumber([1, 7, 7, 1, 2, 3],
    [7, 1])
bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1])
