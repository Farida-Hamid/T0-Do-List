jest.mock('./tasks-manager');
import { add, deleter } from './tasks-manager.js';

describe('Test Project 1:', () => {
  test('Checks adding:', () => {
    const list = [];
    expect(add(list, 'I was added')).toStrictEqual([
      { description: 'I was added', completed: false, index: 0 },
    ]);
  });

  test('check deleting:', () => {
    const list = [
      { description: 'I was added', completed: false, index: 0 },
      { description: 'I was added too', completed: false, index: 1 },
    ];
    expect(deleter(list, 0)).toStrictEqual([
      { description: 'I was added too', completed: false, index: 0 },
    ]);
  });
});
