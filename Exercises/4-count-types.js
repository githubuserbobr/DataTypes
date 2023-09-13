'use strict';

const countTypesInArray = (arr) => {
  const counters = {};
  for (const item of arr) {
    const type = typeof item;
    let counter = counters[type] || 0;
    counters[type] = ++counter;
  }
  return counters;
};

module.exports = { countTypesInArray };
