//unknown
let userInput: unknown;
//unknown is different than any
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError('An error occured!', 500);
console.log(result);