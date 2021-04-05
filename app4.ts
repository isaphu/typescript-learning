function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResults(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const results = n1 + n2;
    cb(results); 
}

printResults(add(5,12));

let combineValues: (a: number, b: number) => number; //function type are types that describe function

combineValues = add;
// combineValues = printResult;

console.log(combineValues(8,8)); 

addAndHandle(10, 20, (results) => {
    console.log(results);
    return results;
})