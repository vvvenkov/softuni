function arrayRotation(arr, rotations) {
    let buffArr = [];
    for (let i = 1; i <= rotations; i++) {
            buffArr.shift(arr[i]);
        for (let n = 1; n < rotations; n++) {
        }
    }
    console.log(buffArr);
}
arrayRotation([51, 47, 32, 61, 21], 2)