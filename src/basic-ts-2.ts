const userName = 'Isa';
// userName = 'Isa Phuyuthanon'
let age = 25;
age = 30;

function addTwoNum(a: number, b: number) {
    let result;
    result = a + b; 
    return result;
}

console.log(addTwoNum(5,4))

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if(button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(addTwoNum(666,5))