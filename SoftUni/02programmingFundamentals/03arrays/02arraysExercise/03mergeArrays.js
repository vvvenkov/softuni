function mergeArrays(arr1, arr2) {
    let newArr = [];
    let numArr1 = 0;
    let numArr2 = 0;
    let sumofTwo = 0;
    for (let i = 0; i < arr1.length; i++) {
        numArr1 = Number(arr1[i]);
       numArr2 = Number(arr2[i]);
        if (i % 2 === 0) {
            sumofTwo = Number(numArr1 + numArr2);
            newArr.push(numArr1 + numArr2)
        } else {
            sumofTwo = (numArr1.toString() + numArr2.toString())
            newArr.push(sumofTwo);
        }       
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])