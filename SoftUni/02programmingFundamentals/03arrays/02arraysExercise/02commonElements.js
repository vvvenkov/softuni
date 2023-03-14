function commonElements(arr1, arr2) {
    let charArr1 = "";
    for (let i = 0; i < arr1.length; i++) {
        charArr1 = arr1[i];
        if (arr2.includes(charArr1)) {
            console.log(charArr1);
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])