function mathPower(num, power){
    let res = num;
    for (let i = 1; i < power; i++){
        res *= num;
    }
    console.log(res);
}
mathPower(2, 8)