function cookingMasterClass(input) {
    let budget = Number(input[0]);
    let students = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let addAprons = Math.ceil(students * 0.20);
    let totalApronsPrice = (apronPrice * students) + (addAprons * apronPrice)
    let totalEggPrice = (eggPrice * students) * 10;
    let totalFlourPrice = flourPrice * students;
    let freeFlour = 0;

    for (let i = 0; i <= students; i++){
        if (i % 5 === 0 && i > 0){
            freeFlour++;
        } else {
            continue;
        }
    }

    let finalPrice = (totalApronsPrice + totalEggPrice + totalFlourPrice - (freeFlour * flourPrice));
    let diff = Math.abs(finalPrice - budget);

    if (finalPrice <= budget){
        console.log(`Items purchased for ${finalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
cookingMasterClass([50, 2, 1.0, 0.10, 10.0])
