import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let counter = 1;
  let newStr = '';

  str.split('').map((letter, index) => {
    if (letter === str[index + 1]) {
      counter++;
    } else {
      newStr += counter === 1 ? `${letter}` : `${counter}${letter}`;
      counter = 1;
    }
  });
  return newStr;
}
