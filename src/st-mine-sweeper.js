import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} m
 * @return {Array<Array>}
 *
 * @example
 * m = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(m) {
  let resultArr = [];
  m.map((arr, i) => {
    resultArr[i] = [...arr];
    arr.map((e, j) => {
      let sum = 0;
      if (m[i - 1] === undefined && m[i + 1] !== undefined) {
        sum += typeof m[i + 1][j] === 'undefined' || !m[i + 1][j] ? 0 : 1;
        sum +=
          typeof m[i + 1][j - 1] === 'undefined' || !m[i + 1][j - 1] ? 0 : 1;
        sum +=
          typeof m[i + 1][j + 1] === 'undefined' || !m[i + 1][j + 1] ? 0 : 1;
      } else if (m[i - 1] !== undefined && m[i + 1] === undefined) {
        sum += typeof m[i - 1][j] === 'undefined' || !m[i - 1][j] ? 0 : 1;
        sum +=
          typeof m[i - 1][j - 1] === 'undefined' || !m[i - 1][j - 1] ? 0 : 1;
        sum +=
          typeof m[i - 1][j + 1] === 'undefined' || !m[i - 1][j + 1] ? 0 : 1;
      } else if (m[i - 1] !== undefined && m[i + 1] !== undefined) {
        sum +=
          typeof m[i - 1][j - 1] === 'undefined' || !m[i - 1][j - 1] ? 0 : 1;
        sum +=
          typeof m[i - 1][j + 1] === 'undefined' || !m[i - 1][j + 1] ? 0 : 1;
        sum +=
          typeof m[i + 1][j - 1] === 'undefined' || !m[i + 1][j - 1] ? 0 : 1;
        sum +=
          typeof m[i + 1][j + 1] === 'undefined' || !m[i + 1][j + 1] ? 0 : 1;
        sum += typeof m[i - 1][j] === 'undefined' || !m[i - 1][j] ? 0 : 1;
        sum += typeof m[i + 1][j] === 'undefined' || !m[i + 1][j] ? 0 : 1;
      }
      sum += typeof arr[j + 1] === 'undefined' || !arr[j + 1] ? 0 : 1;
      sum += typeof arr[j - 1] === 'undefined' || !arr[j - 1] ? 0 : 1;
      resultArr[i][j] = sum;
    });
  });
  return resultArr;
}
