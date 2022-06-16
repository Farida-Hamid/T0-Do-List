function add(list = [], value) {
  const task = {
    description: value,
    completed: false,
    index: list.length,
  };
  list.push(task);
  console.log('my output is', list);
  return list;
}

function deleter(list, index) {
  list.splice(index, 1);
  for (let i = 0; i < list.length; i += 1) {
    list[i].index = i;
  }

  return list
}

module.exports = { add, deleter };