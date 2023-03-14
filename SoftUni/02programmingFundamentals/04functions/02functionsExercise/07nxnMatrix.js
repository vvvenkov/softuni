function nxnMatrix(num) {
    let res = "";
    let boolean = false;

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            res += `${rows} ${cols}`
        }
    }
    console.log(res);
}
nxnMatrix(3)