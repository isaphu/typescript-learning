function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' && typeof n2 !== 'number') {
    //     throw new Error('Incorrect input');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var numOne = 5;
var numTwo = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(numOne, numTwo, printResult, resultPhrase);
