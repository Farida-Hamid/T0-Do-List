export default class Tasks {
  constructor () {
    this.list = this.get();
  }

  get = () => {
    const data = localStorage.getItem('memory');
    if (!data) {
      this.list = [];
    } else {
      this.list = JSON.parse(data);
    }
    return this.list;
  }

  display = (task) => {
    const listContainer = document.querySelector('#list');

    listContainer.innerHTML += `
    <li>
      <input type="checkbox" id="done">
      <p>${task.description}</p>
      <button class="delete" onclick="delete(task)">X</button>
    </li>`;
  }

  loader = () => {
    const listContainer = document.querySelector('#list');
    listContainer.innerHTML = '';
    
    if(this.list.length > 0) {
      this.list.forEach((task) => this.display(task));
    }

    const del = document.querySelectorAll('.delete');

    del.forEach((task, index) => {
      task.addEventListener('click', () => {
        this.delete(index);
      });
    });
  }
  
  add = (value) => {
    const task = {
      description: value,
      completed: false,
      index: this.list.length,
    };
    this.list.push(task);
    localStorage.setItem('memory', JSON.stringify(this.list));
    this.display(task);
  }

  delete = (index) => {
    this.list.splice(index, 1);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i;
      console.log("task", this.list[i], i, this.list[i].index);
    }
    localStorage.setItem('memory', JSON.stringify(this.list));

    this.loader();
  }
}