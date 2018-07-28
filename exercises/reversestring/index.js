// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   var reversedArr = [];
//   var reversedStr = '';
//   for (var i = str.length; i >= 0; i--) {
//     reversedArr.push(str[i]);
//   }
//   reversedStr = reversedArr.join('');
//   return reversedStr;
// }

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
    debugger;
  }

  return reversed;
}


reverse('asdasdasd');


// function reverse(str) {
//   // var reversedStr = str.split('').reverse().join('');
//   // return reversedStr;
//   return str.split('').reverse().join('');
// }

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '');
// }

module.exports = reverse;
