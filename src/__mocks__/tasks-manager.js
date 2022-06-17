function add(list = [], value) {
  const task = {
    description: value,
    completed: false,
    index: list.length,
  };
  list.push(task);
  return list;
}

function deleter(list, index) {
  list.splice(index, 1);
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
  }
  return list;
}

function edit(list, index, value) {
  list[index].description = value;
  return list;
}

function completed(list, index) {
  list[index].completed = true;
  return list;
}

function deleteAll(list) {
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].completed = 'true') {
      list.splice(i, 1);
      list[i].index = i;
    }
  }
  return list;
}

export {
  add,
  deleter,
  edit,
  completed,
  deleteAll,
};
