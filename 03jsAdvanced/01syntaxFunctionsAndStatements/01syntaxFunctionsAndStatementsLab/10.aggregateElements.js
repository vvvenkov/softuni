function aggregateElements(input) {
    function sum(input) {
        return (input[0] + input[1] + input[2]);
    }
    function inverse(input) {
        return ((input[0] / input[0]) + (input[0] / input[1]) + (input[0] / input[2])) //inverse of three number
    }
    function toString(input){
        return (String(input[0]) + String(input[1]) + String(input[2]))
    }

    console.log(sum(input))
    console.log(inverse(input));
    console.log(toString(input));
}
aggregateElements([1, 2, 3])