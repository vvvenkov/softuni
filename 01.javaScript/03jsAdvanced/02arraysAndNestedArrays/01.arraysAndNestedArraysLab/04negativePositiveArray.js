function negativePositiveNumbers(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0){
            newArr.push(arr[i]);
        } else {
            newArr.unshift(arr[i])
        }
    }
    console.log(newArr);
}
negativePositiveNumbers([7, -2, 8, 9])