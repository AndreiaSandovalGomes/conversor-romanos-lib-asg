const mocha = require('mocha');
const chai = require('chai');
const lib = require('../lib/index');
const expect = chai.expect;

describe('lib', () => {
  describe('#intToRoman', () => {
    describe('quando o valor digitado for um inteiro ', () => {
      it('deve me retornar um numero romano', () => {
        expect(lib.intToRoman(1)).to.equal('I');
      });
    });
  });
});

describe('lib', () => {
  describe('#intToRoman', () => {
    describe('quando o valor digitado for um inteiro ', () => {
      it('deve me retornar um numero romano', () => {
        expect(lib.intToRoman(5)).to.equal('V');
      });
    });
  });
});

describe('lib', () => {
  describe('intToRoman', () => {
    describe('Quando o numero digitado for uma string', () => {
      it('Deve me retornar um erro', () => {
        expect(() => lib.intToRoman('a')).to.throw('O campo precisa ser preenchido apenas com números');
      });
    });
  });
});

describe('lib', () => {
  describe('intToRoman', () => {
    describe('Quando não for digitado', () => {
      it('Deve me retornar um erro', () => {
        expect(() => lib.intToRoman(5000)).to.throw('O campo precisa ser preenchido com números até 4999');
      });
    });
  });
});

describe('lib', () => {
  describe('#romanToInt', () => {
    describe('quando o numero digitado for um numero romano', () => {
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('I')).to.equal(1);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('V')).to.equal(5);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('IX')).to.equal(9);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('X')).to.equal(10);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('XL')).to.equal(40);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('L')).to.equal(50);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('C')).to.equal(100);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('D')).to.equal(500);
      });
      it('deve me retornar o numero inteiro', () => {
        expect(lib.romanToInt('M')).to.equal(1000);
      });
    });
  });
});
