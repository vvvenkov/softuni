function wordsTracker(input) {
    let words = input.shift().split(" ")
    let assocArr = {};

    for (let line of words) {
        let word = line.split(" ");
        assocArr[word] = 0

        for (let el of input) {
            if (el == word) {
                assocArr[word]++;
            }
        }
    }
    let sorted = Object.entries(assocArr).sort((a,b) => b[1] - a[1])

    for (let el of sorted){
        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])