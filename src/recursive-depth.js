import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;

    for (let i = 0; i <= arr.length - 1; i++) {
      if (Array.isArray(arr[i])) {
        let depth = 1;
        depth += this.calculateDepth(arr[i]);
        maxDepth = depth > maxDepth ? depth : maxDepth;
      }
    }
    return maxDepth;
  }
}
