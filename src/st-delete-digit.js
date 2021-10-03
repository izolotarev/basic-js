import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split('');
  let min = Math.min.apply(null, arr);
  let result = '';
  let count = 0;

  arr.forEach((value) => {
    if (value == min && count > 0) {
      result += value;
    }
    if (value == min) count++;
    if (value != min) result += value;
  });

  return +result;
}
