let date1 = new Date('July 11, 2022');
let date2 = new Date('November 11, 2022');

let hours_per_day = 24;
let minutes_per_hour = 60;
let seconds_per_minute = 60;
let ms_per_second = 1000;

let msec_per_day = hours_per_day * minutes_per_hour * seconds_per_minute * ms_per_second;
let elapsedMilliseconds = date2.getTime() - date1.getTime();

let dayDiff = elapsedMilliseconds / msec_per_day;
let numDays = Math.round(dayDiff);
console.log('The number of days between dates is ' + numDays);
