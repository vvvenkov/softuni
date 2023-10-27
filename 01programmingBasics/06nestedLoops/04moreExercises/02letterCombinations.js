function letterCombinations(input) {
    let startLetter = Number(input[0].charCodeAt());
    let endLetter = Number(input[1].charCodeAt());
    let skipLetter = Number(input[2].charCodeAt())
    let combo = "";
    let combinationsCount = 0;

    for (let i = startLetter; i <= endLetter; i++) {
        for (let y = startLetter; y <= endLetter; y++){
            for (let j = startLetter; j <= endLetter; j++){
                if (i !== skipLetter && y !== skipLetter && j !== skipLetter){
                    let char1 = String.fromCharCode("a".charCodeAt() + (i - 97));
                    let char2 = String.fromCharCode("a".charCodeAt() + (y - 97));
                    let char3 = String.fromCharCode("a".charCodeAt() + (j - 97));
                    combo += (`${char1}${char2}${char3} `)
                    combinationsCount++;
                }
            }
        }
    }
    console.log(combo + combinationsCount);
}
letterCombinations(["a", "b", "c"])