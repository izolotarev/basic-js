import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(pos) {
    if (isNaN(pos) || pos >= this.chain.length || pos <= 0) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(pos - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.map((ch, index) => (index !== this.chain.length - 1) ? `( ${ch} )~~` : `( ${ch} )`).join('');
    this.chain = [];
    return res;
  }
};
