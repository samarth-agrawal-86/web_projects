// import { findPhoneNumbersInText, isValidPhoneNumber } from 'libphonenumber-js';

// const m = '+997797890,9-1997797890';
// 1997797890;
//console.log(findPhoneNumbersInText(m, 'IN'));

const m2 = '+61 7797890';
// console.log(isValidPhoneNumber(m2));
//Todo: 1. Add a new file called index.js in the playground folder

function dateToString(date) {
  if (!date) {
    return;
  }
  const option = {
    timeZone: 'Asia/Kolkata',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  };

  const newDate = new Date(date);
  const isoString = newDate.toLocaleString('en-IN', option);

  return isoString;
}

console.log(dateToString('2023-03-12'));

function stringToDate(date) {
  const dateObj =
    typeof date === 'string'
      ? new Date(
          String(date).slice(6), // Year
          parseInt(String(date).slice(3, 5)) - 1, // Month (subtract 1 because months are zero-based)
          String(date).slice(0, 2) // Day
        )
      : date;

  return dateObj;
}

console.log(stringToDate('12-03-2023'));
