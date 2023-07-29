function letterStreamn(input) {
    let index = 0;
    let command = input[index];
    let word = "";
    let nCount = 0;
    let oCount = 0;
    let cCount = 0;

    while (command !== "End") {
        if (command === "n" && nCount < 1) {
            nCount++;
        } else if (command === "o" && oCount < 1) {
            oCount++;
        } else if (command === "c" && cCount < 1) {
            cCount++;
        } else {
            word += command;
        }
        if (nCount === 1 && oCount === 1 && cCount === 1) {
            word += " ";
            nCount = 0;
            oCount = 0;
            cCount = 0;
        }
        index++;
        command = input[index];
    }
    console.log(word);
}
letterStreamn(["%",
    "!",
    "c",
    "^",
    "B",
    "`",
    "o",
    "%",
    "o",
    "o",
    "M",
    ")",
    "{",
    "n", "/", "A", "D", "End"])