const moment = require('moment');
let now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
let dayOfYear = moment().format("DDDo")
let seconds = (moment().hours() * 3600) + (moment().minutes() * 60) + moment().seconds()
let savingsTime = moment().isDST()
let leapYear = moment().isLeapYear()

const chalk = require('chalk');

console.log(`It is ${chalk.blueBright.bold(now)}.`);
console.log(`It is the ${chalk.magenta.bold(dayOfYear)} of the year.`);
console.log(`It is ${chalk.cyan.bold(seconds)} seconds into the day`);
if (savingsTime){
  console.log(`It ${chalk.greenBright.bold("is")} during Daylight Savings Time.`);
} else {
  console.log(`It ${chalk.greenBright.bold("is not")} during Daylight Savings Time.`);
}
if (leapYear){
  console.log(`It ${chalk.red.bold("is")} not a leap year.`);
} else {
  console.log(`It ${chalk.red.bold("is not")} a leap year.`);
}
