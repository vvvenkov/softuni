function equalArrays(arr1, arr2) {
    let arr1Number = 0;
    let arr2Number = 0;
    let indexCounter = 0;
    let sum = 0;
    let areEqual = true;
    let index = 0;

    for (let i = 0; i < arr1.length; i++) {
        let numArr1 = Number(arr1[i]);
        let numArr2 = Number(arr2[i]);
        index = i;
        sum += numArr1;
        if (numArr1 === numArr2) {
            continue;
        } else {
            areEqual = false;
            break;
        }
    }
    if (!areEqual) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArrays(['1'], ['10'])
