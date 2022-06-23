module.exports = function toReadable(number) {
  let numName0 = '',
    numName1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    numName10 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    numdig = [];

  numdig[0] = number % 10;
  numdig[1] = Math.floor(number / 10) % 10;
  numdig[2] = Math.floor(number / 100) % 10;
  
  if (number == 0) return 'zero';
  numdig[2] > 0 ? numName0 += numName1[numdig[2]] + ' hundred ' : '';
  numdig[1] > 1 ? numName0 += numName10[numdig[1] - 2] + ' ' : numdig[0] = numdig[1]*10 + numdig[0];
  numName0 += numName1[numdig[0]];

  return numName0.trim();
}