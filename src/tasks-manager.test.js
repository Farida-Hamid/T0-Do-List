jest.mock('./tasks-manager');
const { add } = require('./tasks-manager');

test('checks adding:', () => {
  list = [];
  expect(add(list, 'I was added')).toStrictEqual([{description: 'I was added', completed: false, index: 0}]);
});
