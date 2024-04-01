function cinemaTickets(input) {
    let index = 0;
    let movieTitle = null;
    let seats = null;

    let standardTickets = 0;
    let kidTickets = 0;
    let studentTickets = 0;
    let curSeats = 0;
    let totalTickets = 0;
    let boolean = false;
    let changeMovie = false;

    while (input[index] !== "Finish") {
        movieTitle = input[index];
        index++;
        seats = Number(input[index]);
        index++;
        while (input[index] !== "End") {
            if (input[index] !== "standard" && input[index] !== "kid" && input[index] !== "student") {
                changeMovie = true;
                break;
            }
            if (input[index] === "standard") {
                standardTickets++;
                totalTickets++;
                curSeats++;
            } else if (input[index] === "kid") {
                kidTickets++;
                totalTickets++;
                curSeats++;
            } else if (input[index] === "student") {
                totalTickets++;
                studentTickets++;
                curSeats++;
            }
            index++;
            if (input[index] === "Finish") {
                boolean = true;
                break;
            }
            if (input[index] === "End"){
                break;
            }
        }
        if (changeMovie) {
            console.log(movieTitle + ` - ${((curSeats / seats) * 100).toFixed(2)}% full.`);
            seats = 0;
            curSeats = 0;
        } else {
            console.log(movieTitle + ` - ${((curSeats / seats) * 100).toFixed(2)}% full.`);
            seats = 0;
            curSeats = 0;
            index++;
        }
        if (boolean) {
            break;
        }
    }
    console.log("Total tickets: " + totalTickets);
    console.log(((studentTickets / totalTickets) * 100).toFixed(2) + "% student tickets.");
    console.log(((standardTickets / totalTickets) * 100).toFixed(2) + "% standard tickets.");
    console.log(((kidTickets / totalTickets) * 100).toFixed(2) + "% kids tickets.");
}
cinemaTickets(["Shutter Island",
    9,
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    9,
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    9,
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])
