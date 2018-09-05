const mocha = require("mocha");
const chai = require("chai");
const lib = require("../lib/index");
const expect = chai.expect;

describe("lib", () => {
  describe("#intToRoman", () => {
    describe("quando o valor digitado for um inteiro ", () => {
      it("deve me retornar um numero romano", () => {
        expect(lib.intToRoman(5)).to.equal("V");
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
        expect(() => lib.intToRoman()).to.throw('O campo precisa ser preenchido');
      });
    });
  });
});

describe("lib", () => {
  describe("#romanToInt", () => {
    describe("quando o numero digitado for um numero romano", () => {
      it("deve me retornar o numero romano", () => {
        expect(lib.romanToInt('V')).to.equal(5);
      });
    });
  });
});
