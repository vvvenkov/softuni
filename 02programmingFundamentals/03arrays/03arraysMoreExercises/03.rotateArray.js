function rotateArray(arr) {
    let rotations = Number(arr.pop());
    let rotationsCount = 0;
    let newArr = [];

    for (let j = 0; j < rotations; j++) {
        if (rotationsCount !== rotations) {
            for (let i = arr.length - 1; i > 0; i--) {
                newArr.unshift(arr[i]);
                arr.pop();
                rotationsCount++;
                if (rotationsCount === rotations) {
                    break;
                }
            }
        }
        newArr.push(arr[j]);
    }
    console.log(newArr.join(" "));
}
//rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
