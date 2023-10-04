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

interface MultiplyValues {
    value1: number;
    value2: number;
  }
  
  const parseArguments = (args: string[]): MultiplyValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');
  
    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
      return {
        value1: Number(args[2]),
        value2: Number(args[3])
      }
    } else {
      throw new Error('Provided values were not numbers!');
    }
  }
  
  const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText,  a * b);
  }
  
  try {
    const { value1, value2 } = parseArguments(process.argv);
    multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
