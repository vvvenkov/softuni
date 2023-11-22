function fligthSchedule(input) {

    let flights = input[0];
    let flightsToObject = [];

    let changedflights = input[1];
    let status = String(input[2]);

    let changed = [];

    flights.forEach(flight => {
        let [code, destination, destination2] = flight.split(" ");

        if (destination2 !== undefined) {
            destination = `${destination} ${destination2}`;
            flightsToObject.push({ code, destination })
        } else {
            flightsToObject.push({ code, destination })
        }
    });

    changedflights.forEach(el => {
        let [code, change] = el.split(" ");


        flightsToObject.forEach(flight => {
            if (JSON.stringify(el).includes("Cancelled")){
                changed.push(flight)
            }
        })
    })

    changed.forEach(flight => {
        console.log(flight);
    })
    

}
fligthSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'], ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Ready to fly']
])