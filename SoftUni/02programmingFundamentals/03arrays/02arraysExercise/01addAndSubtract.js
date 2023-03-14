function addAndSubtract(arr) {
    let arr2 = [];
    let indexCount = 0;
    let sum = 0;
    let sumArr1 = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = Number(arr[i]);
        indexCount++;
        sumArr1 += currentNumber;
        if (currentNumber % 2 === 0) {
            arr2.push(currentNumber + i);
            sum += currentNumber + i;
        } else {
            arr2.push(currentNumber - i);
            sum += currentNumber - i;
        }
    }
    console.log(arr2);
    console.log(sumArr1);
    console.log(sum);
}
addAndSubtract([5, 15, 23, 56, 35])
console.log("-------------------------------------//");
addAndSubtract([-5, 11, 3, 0, 2])