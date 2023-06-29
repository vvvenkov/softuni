function wordsTracker(input) {
    let map = new Map();
    let words = input.shift().split(" ")

    for (let line of words) {
        let word = line.split(" ");
        for (let el of input) {
            if (el == word) {
                if (!map.has(el)) {
                    map.set(el, 1)
                } else {
                    map.set(el, map.get(el) + 1);
                }
            }
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1])

    for (let el of sorted) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])