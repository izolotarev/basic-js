import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let obj = {};
  domains.map((domain) => {
    let domainArr = domain.split('.').reverse();
    let newDomain = '';
    for (let i = 0; i < domainArr.length; i++) {
      newDomain += `.${domainArr[i]}`;
      if (obj[newDomain] === undefined) {
        obj[newDomain] = 1;
      } else {
        obj[newDomain]++;
      }
    }
  });
  return obj;
}
