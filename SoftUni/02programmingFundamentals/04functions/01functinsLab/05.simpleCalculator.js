function simpleCalculator(num1, num2, operator){
    let res = 0;
    switch(operator){
        case "add": res = num1 + num2; break;
        case "subtract": res = num1 - num2; break;
        case "multiply": res = num1 * num2; break;
        case "divide": res = num1 / num2; break;
    }
    console.log(res);
}
simpleCalculator(40,
8,
'divide')