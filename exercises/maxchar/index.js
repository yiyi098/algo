// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let mostCommon = '';
//   const charCount = {};
//   const arr = str.split('');
//   for (let char of arr) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   let counter = 0;
//   for (let char in charCount) {
//     if (charCount[char] > counter) {
//       counter = charCount[char];
//       mostCommon = char;
//     }
//   }
//   return mostCommon;
// }

// function maxChar(str) {
//   let mostCommon = '';
//   const charCount = {};
//   const arr = str.split('');
//   for (let char of arr) {
//     charCount[char] ? charCount[char]++ : charCount[char] = 1;
//   }
//   let counter = 0;
//   for (let char in charCount) {
//     if (charCount[char] > counter) {
//       counter = charCount[char];
//       mostCommon = char;
//     }
//   }
//   return mostCommon;
// }

function maxChar(str) {
  let mostCommon = '';
  const charCount = {};
  for (let char of str) {
    charCount[char] = charCount[char]++ || 1;
  }
  let counter = 0;
  for (let char in charCount) {
    if (charCount[char] > counter) {
      counter = charCount[char];
      mostCommon = char;
    }
  }
  return mostCommon;
}

module.exports = maxChar;
