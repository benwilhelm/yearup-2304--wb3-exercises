function evenOrOdd(num) {
  if (num % 2 == 1) {
    return 'odd';
  } else {
    return 'even';
  }
}

let result = evenOrOdd(15);
result = evenOrOdd(6);

// const myString = 'Ben\'s first word was "hi"';
// console.log(myString);

// const anotherString = 'this is a "string"';
// console.log(anotherString.length);

// const lorem =
//   'Lorem ipsum dolor sit amet, consectetur' +
//   ' adipisicing elit. Eaque rem blanditiis fugiat' +
//   ' enim, expedita dolorum? Alias dolorum tenetur' +
//   ' aperiam odit! Natus eos illo accusamus tempore' +
//   ' reiciendis architecto nam aut minima!';
// console.log(lorem.toLowerCase());

// const greeting = 'Hi Ben';
// const shoutedGreeting = greeting.toUpperCase();
// console.log(shoutedGreeting);

// const spaceyString = '     hi ben       ';
// console.log(spaceyString.trim());

function getPartNumber(partCode) {
  const dashPos = partCode.indexOf('-');
  return partCode.substring(0, dashPos);
}

function getPartSize(partCode) {
  const dashPos = partCode.indexOf('-');
  return partCode.substring(dashPos + 1);
}

const partCode1 = '912387492834-large';
const partCode2 = '2039482344-medium';

console.log(`for part code ${partCode1}`);
console.log(`part number is ${getPartNumber(partCode1)}`);
console.log(`part size is ${getPartSize(partCode1)}`);

// console.log(`the part number of part code ${partCode2} is ${partNum1}`);

// function calculateSalesTax(myStateTax, amount) {
//   const salesTaxOwed = myStateTax * amount;

//   return salesTaxOwed;
// }

// const illinoisTax = 0.11;
// const costOfBensThing = 10;
// const benOwesOn10 = calculateSalesTax(illinoisTax, costOfBensThing);
// console.log(`Ben owes ${benOwesOn10} in Illinois sales tax`);
