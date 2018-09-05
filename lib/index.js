try {
  intToRoman(num);
} catch (e){
  console.log("Verificar se è um nùmero até 4999")
}
try {
  romanToInt(romans);
} catch (e){
  console.log("Verificar se é um número romano")
}
module.exports.intToRoman =
function intToRoman(num){
let roman = "";
 if (typeof num !== "number") {
   throw new Error('O campo precisa ser preenchido apenas com números');
 } else if (num === undefined ) {
   throw new Error('O campo precisa ser preenchido');
 } else if (num > 4999 ){
   throw new Error('O campo precisa ser preenchido com números menores até 4999');
 } else {
   let romanNumber = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }

  for (var prop in romanNumber){
    if (num >= romanNumber[prop]){
      roman += prop.repeat(Math.trunc(num / romanNumber[prop]));
      num -= romanNumber[prop] * Math.trunc(num / romanNumber[prop]);
    }
  }
}
return roman;
}

module.exports.romanToInt =
function romanToInt(romans) {
  let romanConversor = (c)=>{
    switch (c){
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
    }
  }
  let romansNum = romans.toUpperCase(),
      conv = romanConversor(romans.charAt(0));
  let beforeNumber;
  let actNumber;
  let arrRoman = ["I, V, X, L, C, D, M"];
  let l;
  let i;
  for (l of arrRoman){
    if(romansNum.length !== "" || romansNum === arrRoman[l]){
      for(i = 1; i < romansNum.length; i++){
      actNumber = romanConversor(romansNum.charAt(i));
      beforeNumber = romanConversor(romansNum.charAt(i-1));
      if(actNumber <= beforeNumber){
      conv += actNumber;
      } else {
      conv = conv - beforeNumber*2 + actNumber;
      }
      }
    }else{
      throw new typeError ("Deve ser um numero romano");
    }
    return  conv;
  }
}
// romanToInt('x');
