function train(arr) {
    let wagons = arr.shift().split(" ").map(el => Number(el));
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= maxCapacity) {
                    wagons[j] += Number(passengers);
                    break;
                } else {
                    continue;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])