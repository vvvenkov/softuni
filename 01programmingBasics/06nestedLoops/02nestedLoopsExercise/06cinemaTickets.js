function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let allMovieTickets = 0;
    let boolean = false;
    while (command !== "Finish"){
        let movie = command;
        let ticketsLeft = Number(input[index]);
        index++;
        let currentTicket = input[index];
        index++;
        while (currentTicket !== "End"){
            if (currentTicket === "student"){
                studentTickets++;
            } else if (currentTicket === "standard"){
                standardTickets++;
            } else if (currentTicket === "kid"){
                kidTickets++;
            }
            totalTickets++;
            currentTicket = input[index]
            index++;
            if (totalTickets === ticketsLeft){
                boolean = true;
                break;
            }
        }
        console.log(`${movie} - ${(((totalTickets / ticketsLeft) * 100).toFixed(2))}% f5ull.`);
        allMovieTickets += totalTickets;
        totalTickets = 0;
        command = input[index];
        index++;
        if (boolean){
            break;
        }
    }
    console.log(`Total tickets: ${allMovieTickets}`);
    console.log((((studentTickets / allMovieTickets) * 100).toFixed(2)) + "% student tickets.");
    console.log(((standardTickets / allMovieTickets) * 100).toFixed(2) + "% standard tickets.");
    console.log(((kidTickets / allMovieTickets) * 100).toFixed(2) + "% kids tickets.");
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
console.log("------------------------------------------");
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])