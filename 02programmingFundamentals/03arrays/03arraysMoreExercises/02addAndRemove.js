function addAndRemove(arr) {
    let number = 0;
    let newArr = [];
    let isEmpty = false;

    for (let command of arr) {
        number++;
        switch (command) {
            case "add":
                newArr.push(number)
                break;
            case "remove":
                newArr.pop(number)
                break;
        }
        if (newArr.length < 1) {
            isEmpty = true;
            break;
        }
    }
    if (isEmpty) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "));
    }
}
addAndRemove(["add", "add", "add", "add"])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove'])

