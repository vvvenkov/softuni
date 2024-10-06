function train(arr) {
    let wagons = arr.shift().split(" ").map(el => Number(el))   //<--- the .map converts the STRING array to a NUMBER array
    let maxWagonCapacity = Number(arr.shift());


    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));
        } else {
            for (let y = 0; y < wagons.length; y++) {
                if ((Number(wagons[y]) + Number(command)) <= maxWagonCapacity){
                    wagons[y] += Number(command);
                    break;
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