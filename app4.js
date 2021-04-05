function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var results = n1 + n2;
    cb(results);
}
printResults(add(5, 12));
var combineValues; //function type are types that describe function
combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (results) {
    console.log(results);
});
