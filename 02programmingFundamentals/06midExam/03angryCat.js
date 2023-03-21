function angryCat(arr, entry, type) {
    index = 0;
    let leftSum = 0;
    let rightSum = 0;
    let entryItem = Number(arr[entry]);

    if (type === "cheap") {
        for (let i = entry - 1; i >= 0; i--) {
            let currentNumber = arr[i];
            if (currentNumber < entryItem) {
                leftSum += currentNumber;
            } else {
                continue;
            }
        }
        for (let i = entry + 1; i <= arr.length - 1; i++) {
            let currentNumber = arr[i];
            if (currentNumber < entryItem) {
                rightSum += currentNumber;
            } else {``
                continue;
            }
        } 
    }
    if (type === "expensive") {
        for (let i = entry - 1; i >= 0; i--) {
            let currentNumber = arr[i];
            if (currentNumber >= entryItem) {
                leftSum += currentNumber;
            } else {
                continue;
            }
        }
        for (let i = entry + 1; i <= arr.length - 1; i++) {
            let currentNumber = arr[i];
            if (currentNumber >= entryItem) {
                rightSum += currentNumber;
            } else {
                continue;
            }
        }
    }
    if (leftSum >= rightSum){
        console.log("Left - " + leftSum);
    } else {
        console.log("Right - " + rightSum);
    }
}
angryCat([5, 10, 12, 5, 4, 20],
    3,
    "cheap")