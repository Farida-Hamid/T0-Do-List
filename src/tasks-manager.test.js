import {
  add,
  completed,
  deleter,
  edit,
  deleteAll,
} from './__mocks__/tasks-manager.js';

jest.mock('./tasks-manager');

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

  test('check Editing:', () => {
    const list = [{ description: 'I was added', completed: false, index: 0 }];
    expect(edit(list, 0, 'I was edited')).toStrictEqual([
      { description: 'I was edited', completed: false, index: 0 },
    ]);
  });

  test('mark completed:', () => {
    const list = [
      { description: 'I am to be completed', completed: false, index: 0 },
    ];
    expect(completed(list, 0)).toStrictEqual([
      { description: 'I am to be completed', completed: true, index: 0 },
    ]);
  });

  test('delete completed:', () => {
    const list = [
      { description: '1', completed: false, index: 0 },
      { description: '2', completed: false, index: 1 },
      { description: '3', completed: false, index: 2 },
      { description: '4', completed: true, index: 3 },
      { description: '5', completed: false, index: 4 },
      { description: '6', completed: true, index: 5 },
      { description: '7', completed: false, index: 6 },
      { description: '8', completed: true, index: 7 },
      { description: '9', completed: false, index: 8 },
      { description: '10', completed: true, index: 9 },
      { description: '11', completed: false, index: 10 },
      { description: '12', completed: true, index: 11 },
    ];
    expect(deleteAll(list)).toStrictEqual([
      { description: '1', completed: false, index: 0 },
      { description: '2', completed: false, index: 1 },
      { description: '3', completed: false, index: 2 },
      { description: '5', completed: false, index: 3 },
      { description: '7', completed: false, index: 4 },
      { description: '9', completed: false, index: 5 },
      { description: '11', completed: false, index: 6 },
    ]);
  });
});
