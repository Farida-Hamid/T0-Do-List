/* eslint-disable prefer-const */
jest.mock('./tasks-manager');
const { add, deleter } = require('./tasks-manager');

describe('Test Project 1:', () => {
  test('Checks adding:', () => {
    let list = [];
    expect(add(list, 'I was added')).toStrictEqual([{ description: 'I was added', completed: false, index: 0 }]);
  });

  //////// add test to delete function here
  
});
