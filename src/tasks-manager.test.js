jest.mock('./tasks-manager');
const { add } = require('./tasks-manager');

describe('Test Project 1:', () => {
  test('Checks adding:', () => {
    list = [];
    expect(add(list, 'I was added')).toStrictEqual([{description: 'I was added', completed: false, index: 0}]);
  });

  //////// add test to delete function here
});
