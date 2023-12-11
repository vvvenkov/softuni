function monthlyReport(arr) {

    let distributors = [];
    let clients = [];
    let totalSum = 0;

    for (let line of arr) {
        let [command, name, sum] = line.split(" ");
        sum = Number(sum);

        if (command === "End") {
            break;
        }

        if (command === "Deliver") {
            let find = distributors.find(el => el.name === name);
            if (find) {
                find.sum += sum;
            } else {
                distributors.push({ name, sum })
            }
        } else if (command === "Return") {
            let find = distributors.find(el => el.name === name);
            if (find) {
                if (find.sum < sum) {
                    continue;
                } else {
                    find.sum -= sum;
                }
            } else {
                continue;
            }
        } else if (command === "Sell") {
            let find = clients.find(el => el.name === name);
            if (find) {
                find.sum += sum
                totalSum += sum;
            } else {
                clients.push({ name, sum })
                totalSum += sum;
            }
        }
    }
    clients.forEach(el => {
        console.log(`${el.name}: ${el.sum.toFixed(2)}`);
    })
    console.log("-----------");
    distributors.forEach(el => {
        console.log(`${el.name}: ${el.sum.toFixed(2)}`);
    })
    console.log("-----------");

    console.log("Total Income: " + totalSum.toFixed(2));
}
monthlyReport(["Deliver North 200.30",
    "Deliver Marco 10000.00",
    "Deliver North 150.50",
    "End"])