function convertFtoC(tempF) {
  const tempC = (tempF - 32) * (5 / 9);
  return tempC;
}

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));

const f32 = convertFtoC(32);
console.log('f32', f32); // <--
console.log(convertFtoC(0));
console.log(convertFtoC(-40));

const boilingF = 212;
const boilingC = convertFtoC(boilingF);
console.log(`${boilingF} F is ${boilingC} C`);

const freezingF = 32;
const freezingC = convertFtoC(freezingF);
console.log(`${freezingF} F is ${freezingC} C`);
