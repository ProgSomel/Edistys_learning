//! functions 
function addTwoNumbers(a:number, b:number):number {
    return a + b;
}

//? arrow Function 
const substractTwoNumbers = (a:number, b:number):number => a+b;

const addAllNumbers = (items:number[]): void => {
    const total = items.reduce((a, c)=> a+c, 0);
    console.log(total);
}

//! return type inference 
function formatGreeting(name:string, greeting:string){
    return `${greeting} ${name}`;
}
const result = formatGreeting('Somel', "Hello");