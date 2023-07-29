function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floors; i > 0; i--) {
        let buff = "";
        for (let y = 0; y < rooms; y++) {
            if (i === floors) {
                buff += (`L${i}${y} `)
            } else if (i % 2 === 0) {
                buff += (`O${i}${y} `)
            } else {
                buff += (`A${i}${y} `)
            }
        }
        console.log(buff);
    }
}
building(["6", "4"])