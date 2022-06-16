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

module.exports = add;