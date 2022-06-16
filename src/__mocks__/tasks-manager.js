function add(value) {
  const task = {
    description: value,
    completed: false,
    index: this.list.length,
  };
  this.list.push(task);
  localStorage.setItem('memory', JSON.stringify(this.list));
  this.loader();
}