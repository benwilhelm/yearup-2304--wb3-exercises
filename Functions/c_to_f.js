function convertCtoF(tempC) {
  // do some calculation
  const tempF = (9 / 5) * tempC + 32;
  return tempF;
}

let tempInC = 100;
console.log(`${tempInC} C -> ${convertCtoF(tempInC)} F`);

tempInC = 45;
console.log(`${tempInC} C -> ${convertCtoF(tempInC)} F`);

tempInC = 19;
console.log(`${tempInC} C -> ${convertCtoF(tempInC)} F`);

tempInC = 0;
console.log(`${tempInC} C -> ${convertCtoF(tempInC)} F`);

tempInC = -7;
console.log(`${tempInC} C -> ${convertCtoF(tempInC)} F`);

tempInC = -40;
console.log(`${tempInC} C -> ${convertCtoF(tempInC)} F`);
