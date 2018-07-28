// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   var reversed = n.toString().split('').reverse().join('');
//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

function reverseInt(n) {
  var reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

// function reverseInt(n) {
//   var numArr = n.toString().split('');
//   var revStr = '';
//   var revArr = [];
//   if (numArr[0] === '-') {
//     revArr.push('-');
//     for (var i = numArr.length - 1; i > 0; i--) {
//       revArr.push(numArr[i]);
//     }
//     return parseInt(revArr.join(''));
//   } else {
//     for (var i = numArr.length - 1; i >= 0; i--) {
//       revArr.push(numArr[i]);
//     }
//     return parseInt(revArr.join(''));
//   }
// }

module.exports = reverseInt;
