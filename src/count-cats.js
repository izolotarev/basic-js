import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(catsArr) {
  let k = 0;
  for (let i = 0; i <= catsArr.length - 1; i++) {
    for (let j = 0; j <= catsArr[i].length - 1; j++) {
      if (catsArr[i][j] === '^^') k++;
    }
  }
  return k;
}
