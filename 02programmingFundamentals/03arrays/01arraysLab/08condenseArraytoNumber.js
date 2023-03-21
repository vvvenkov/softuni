function condenseArraytoNumber(arr) {
    let condenced = [];

    for (let el of arr) {
        condenced.push(el)
    }
    while (condenced.length > 1) {
        let tempArr = [];
        for (let i = 0; i < condenced.length - 1; i++) {
            tempArr[i] = (condenced[i] + condenced[i + 1]);
        }
        condenced = tempArr;
    }

    if (arr.length === 1) {
        console.log(`${arr}`);
    } else {
        console.log(condenced.join(" "));
    }
}
condenseArraytoNumber([2, 5])