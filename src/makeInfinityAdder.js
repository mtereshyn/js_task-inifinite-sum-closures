'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let total = 0;

  const adder = (num) => {
    if(num === undefined) {
      const currentTotal = total;
      currentTotal = 0;

      return currentTotal;
    }

    total += num;

    return adder;
  };

  return adder;
}

module.exports = makeInfinityAdder;
