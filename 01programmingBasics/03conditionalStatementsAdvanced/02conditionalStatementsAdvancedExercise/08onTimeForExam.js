function onTimeForExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);

    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let totalExamTime = (examHour * 60) + examMinutes;
    let totalArrivalTime = (arrivalHour * 60) + arrivalMinute;

    let diff = Math.abs(totalArrivalTime - totalExamTime)

    if (totalArrivalTime > totalExamTime) {
        console.log("Late");
        if (diff >= 60 && diff < 70) {
            console.log(`${Math.trunc(diff / 60)}:0${diff % 60} hours after the start`);
        } else if (diff > 60) {
            console.log(`${Math.trunc(diff / 60)}:${diff % 60} hours after the start`);
        } else if (diff === 60) {
            console.log(`${Math.trunc(diff / 60)}:${diff % 60}0 hours after the start`);
        } else {
            console.log(diff + " minutes after the start");
        }
    } else if (totalArrivalTime <= totalExamTime - 31) {
        console.log("Early");
        if (diff >= 60 && diff < 70) {
            console.log(`${Math.trunc(diff / 60)}:0${diff % 60} hours before the start`);
        } else if (diff > 60) {
            console.log(`${Math.trunc(diff / 60)}:${diff % 60} hours before the start`);
        } else if (diff === 60) {
            console.log(`${Math.trunc(diff / 60)}:0 hours before the start`);
        } else {
            console.log(diff + " minutes before the start");
        }
    } else if (totalArrivalTime <= totalExamTime - 30) {
        console.log("On time");
        console.log(diff + " minutes before the start");
    }
}
onTimeForExam(["14",
"00",
"13",
"55"])

