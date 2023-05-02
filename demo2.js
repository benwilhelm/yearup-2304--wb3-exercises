// const xmasEve92 = new Date('1992-12-24T00:00:00Z');

// console.log(xmasEve92.toUTCString());
// console.log(xmasEve92);

const now = new Date();
const jan = new Date('2023-01-15T12:00:20.349');

console.log('now', now);
console.log('jan', jan);

const inputEl = document.getElementById('myDateInput');
const userDate = inputEl.value;

const divEl = document.getElementById('messageDiv');
divEl.innerHTML = 'Whatever you want to display';
