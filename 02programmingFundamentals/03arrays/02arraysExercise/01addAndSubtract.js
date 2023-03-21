function addAndSubtract(arr) {
    let newArr = [];
    let arrSum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i++){
        let currentNumber = arr[i];
        arrSum += currentNumber;
        if (currentNumber % 2 === 0){
            currentNumber += i;
            newArr.push(currentNumber)
            newArrSum += currentNumber;
        } else {
            currentNumber -= i;
            newArr.push(currentNumber);
            newArrSum += currentNumber;
        }
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}
addAndSubtract([5, 15, 23, 56, 35])
console.log("-------------------------------------//");
addAndSubtract([-5, 11, 3, 0, 2])