function movies(input) {
    let arr = [];
    let obj = {};

    for (let line of input) {
        if (line.includes("addMovie")) {
            let name = line.split("addMovie ")[1]
            obj.name = name;
        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ");
            if (obj.hasOwnProperty(name)){
                obj.director = director;
            }
        } else if (line.includes("onDate")) {
            let [name, date] = line.split("onDate")
        }
        arr.push(obj)
    }
    console.log(obj);
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'])