// Version one ---> 

// const multiplicator = (a:number, b:number, printText:string) => {
//     console.log(printText,  a * b);
//   }
  
//   multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');



//versopm two ---->


// type Operation = 'multiply' | 'add' | 'divide';

// const calculator = (a: number, b: number, op: Operation) => {
//   if (op === 'multiply') {
//     return a * b;
//   } else if (op === 'add') {
//     return a + b;
//   } else if (op === 'divide') {
//     if (b === 0) return 'can\'t divide by 0!';
//     return a / b;
//   }
// }
// console.log("The multiplication of 2 and 4 is ",calculator(2,4,"multiply"));


//version three ---->

type Operation = 'multiply' | 'add' | 'divide';


const calculator = (a: number, b: number, op: string | Operation) : number => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':

      if (b === 0) throw new Error('Can\'t divide by 0!');
      return a / b;
    case 'add':
      return a + b;
    default:""

    //   throw new Error('Operation is not multiply, add or divide!');
  }
}

try {
  console.log(calculator(1, 5 , 'divide'));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong: '
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
calculator(a, b, `Multiplied ${a} and ${b}, the result is:`);


