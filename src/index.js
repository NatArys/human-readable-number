module.exports = function toReadable(number) {

  let numName;

  numName[1] = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen ']
  numName[10] = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let numDigit;

  // numDigit[0] = number % 10;
  // numDigit[10] = number % 100 - numDigit[0];
  // numDigit[100] = number % 1000 - numDigit[10] - numDigit[0];

  
numDigit = String(number).split('')

console.log(numDigit[0])


}
toReadable(1234)