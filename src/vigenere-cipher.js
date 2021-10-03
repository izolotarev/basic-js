import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const dictString = 'abcdefghijklmnopqrstuvwxyz';
const dictArray = dictString.split('');

export default class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === undefined || direct === true) direct = true;
    this.directSeq = direct;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error('Incorrect arguments!');
    let newKey = '',
      solutionStr = '',
      sum = 0,
      j = 0;

    message.split('').map((letter) => {
      if (dictArray.indexOf(letter.toLowerCase()) === -1 || letter === ' ')
        newKey += letter;
      else {
        newKey += key[j].toLowerCase();
        j++;
        if (j === key.length) j = 0;
      }
    });

    message.split('').map((letter, index) => {
      if (dictArray.indexOf(letter.toLowerCase()) === -1 || letter === ' ')
        solutionStr += letter;
      else {
        if (
          dictArray.indexOf(newKey[index]) +
            dictArray.indexOf(letter.toLowerCase()) >=
          26
        ) {
          sum =
            dictArray.indexOf(newKey[index]) +
            dictArray.indexOf(letter.toLowerCase()) -
            26;
        } else {
          sum =
            dictArray.indexOf(newKey[index]) +
            dictArray.indexOf(letter.toLowerCase());
        }
        solutionStr += dictArray[sum];
      }
    });

    return this.directSeq
      ? solutionStr.toUpperCase()
      : solutionStr.split('').reverse().join('').toUpperCase();
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error('Incorrect arguments!');

    let newKey = '',
      solutionStr = '',
      sum = 0,
      j = 0;

    message.split('').map((letter) => {
      if (dictArray.indexOf(letter.toLowerCase()) === -1 || letter === ' ')
        newKey += letter;
      else {
        newKey += key[j].toLowerCase();
        j++;
        if (j === key.length) j = 0;
      }
    });

    message.split('').map((letter, index) => {
      if (dictArray.indexOf(letter.toLowerCase()) === -1 || letter === ' ')
        solutionStr += letter;
      else {
        if (
          dictArray.indexOf(letter.toLowerCase()) -
            dictArray.indexOf(newKey[index]) <
          0
        ) {
          sum =
            dictArray.indexOf(letter.toLowerCase()) -
            dictArray.indexOf(newKey[index]) +
            26;
        } else {
          sum =
            dictArray.indexOf(letter.toLowerCase()) -
            dictArray.indexOf(newKey[index]);
        }
        solutionStr += dictArray[sum];
      }
    });

    return this.directSeq
      ? solutionStr.toUpperCase()
      : solutionStr.split('').reverse().join('').toUpperCase();
  }
}
