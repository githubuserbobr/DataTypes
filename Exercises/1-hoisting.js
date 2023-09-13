'use strict';

const fn = () => {
  // eslint-disable-next-line no-use-before-define
  console.log(a);
  const a = 10;
};

module.exports = { fn };
