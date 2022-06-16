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
    const list = [
      { description: 'I was added', completed: false, index: 0 },
      { description: 'I was added too', completed: false, index: 1 },
    ];
    expect(edit(list, 0, 'I was edited')).toStrictEqual([
      { description: 'I was edited', completed: false, index: 0 },
    ]);
  });

  test('mark completed:', () => {
    const list = [
      { description: 'I am to be completed', completed: true, index: 0 },
      { description: 'I was added', completed: false, index: 1 },
      { description: 'I was added too', completed: false, index: 2 },
      { description: 'I am to be completed', completed: false, index: 3 },
      { description: 'I am to be completed', completed: true, index: 4 },
      { description: 'I was added too', completed: false, index: 5 },
    ];
    expect(completed(list, 3)).toStrictEqual([
      { description: 'I am to be completed', completed: true, index: 3 },
    ]);
  });

  test('delete completed:', () => {
    const list = [
      { description: 'I was added', completed: false, index: 0 },
      { description: 'I was   too', completed: true, index: 1 },
      { description: 'I was added', completed: false, index: 2 },
      { description: 'I   added too', completed: true, index: 3 },
      { description: 'I was added', completed: false, index: 4 },
      { description: 'I was added too', completed: true, index: 5 },
      { description: 'I was a d', completed: false, index: 6 },
      { description: 'I was ad ed too', completed: true, index: 7 },
      { description: 'I was ad d', completed: false, index: 8 },
      { description: 'I was added too', completed: true, index: 9 },
      { description: 'I was a ed', completed: false, index: 10 },
      { description: 'I was a d too', completed: true, index: 11 },
    ];
    expect(deleteAll(list)).toStrictEqual([
      { description: 'I was   too', completed: true, index: 0 },
      { description: 'I   added too', completed: true, index: 1 },
      { description: 'I was added too', completed: true, index: 2 },
      { description: 'I was ad ed too', completed: true, index: 3 },
      { description: 'I was added too', completed: true, index: 4 },
      { description: 'I was a d too', completed: true, index: 5 },
    ]);
  });
});
