function averageArythmic(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    console.log(sum / (input.length).toFixed(2));

}
averageArythmic(["4", "3", "2", "4", "2"])