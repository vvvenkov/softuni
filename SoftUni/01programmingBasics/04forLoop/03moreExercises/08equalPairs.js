function equalPairs(input) {
    let pairs = Number(input[0]);
    let pair = 0;
    
    for (let i = 1; i <= pairs; i++){
        let currentNum = input[i];

        if (i % 2 === 0){
            pair += currentNum;
        }
        if (i % 2 !== 0){
            pair+= currentNum;
        }
        console.log(pair);
    }
}
equalPairs([3,
    1,
    2,
    0,
    3,
    4,
    -1])