jest.mock('./tasks-manager');
const add = require('./tasks-manager');

test('checks:', () => {
  list = []
  expect(add(list, 'I was added')).toStrictEqual([{description: 'I was added', completed: false, index: 0}]);
});