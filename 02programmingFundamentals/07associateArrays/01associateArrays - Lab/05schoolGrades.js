function schoolGrades(input) {

    let assocArr = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens.shift()

        let grades = tokens.map(Number);
        let averageGrade = 0;
        let length = grades.length;

        for (let grade of grades) {
            averageGrade += Number(grade);
        }

        if (assocArr.hasOwnProperty(name)) {
            assocArr[name] += averageGrade;
        } else {
            assocArr[name] = averageGrade;
        }
    }
    
    let sortedArr = Object.entries(assocArr).sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, grade] of sortedArr){
        console.log(`${name}: ${grade}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])