module.exports.intToRoman = function intToRoman(num) {
  let roman = '';
  if (typeof num !== 'number') {
    throw new Error('O campo precisa ser preenchido apenas com números');
  } else if (num > 4999) {
    throw new Error('O campo precisa ser preenchido com números até 4999');
  } else {
    let romanNumber = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    for (var prop in romanNumber) {
      if (num >= romanNumber[prop]) {
        roman += prop.repeat(Math.trunc(num / romanNumber[prop]));
        num -= romanNumber[prop] * Math.trunc(num / romanNumber[prop]);
      }
    }
  }
  return roman;
};
// intToRoman(33);
module.exports.romanToInt =
function romanToInt(romans) {
  let romansNum = romans.toUpperCase();
  let romanConversor = (check)=> {
    switch (check) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    }
  };
  let conv = romanConversor(romansNum.charAt(0));
  let beforeNumber;
  let actNumber;
  let arrRoman = ['I, V, X, L, C, D, M'];
  let letter;
  let i;
  for (letter of arrRoman) {
    if (romansNum.length !== null || romansNum === arrRoman[letter]) {
      for (i = 1; i < romansNum.length; i++) {
        actNumber = romanConversor(romansNum.charAt(i));
        beforeNumber = romanConversor(romansNum.charAt(i - 1));
        if (actNumber <= beforeNumber) {
          conv += actNumber;
        } else {
          conv = conv - beforeNumber * 2 + actNumber;
        }
      }
    }
    return conv;
  }
};
// romanToInt('ix');
