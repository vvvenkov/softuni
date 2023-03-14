function reverseAnArray(n, inputArr) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i])
    }

    let varArr = "";

    for (let i = n - 1; i >= 0; i--) {
        varArr += arr[i] + " ";
    }
    console.log(varArr);
}
reverseAnArray(3, [10, 20, 30, 40, 50])