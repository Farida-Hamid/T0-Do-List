import {completeTask, clearScreen} from './checker.js';

export default class Tasks {
  constructor() {
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
      <input class="content" type="text" value="${task.description}">
      <button class="delete" onclick="delete(task)">X</button>
    </li>`;
  }

  loader = () => {
    // Load tasks
    const listContainer = document.querySelector('#list');
    listContainer.innerHTML = '';

    if (this.list.length > 0) {
      this.list.forEach((task) => this.display(task));
    }

    // Delete a task
    const del = document.querySelectorAll('.delete');

    del.forEach((task, index) => {
      task.addEventListener('click', () => {
        this.delete(index);
      });
    });

    // Edit tasks
    const edit = document.querySelectorAll('.content');
    edit.forEach((text, index) => {
      text.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && text.value) {
          this.list[index].description = text.value;
          localStorage.setItem('memory', JSON.stringify(this.list));
        }
      });
    });
    
    completeTask(this.list);
    clearScreen(this.list);
  }

  add = (value) => {
    const task = {
      description: value,
      completed: false,
      index: this.list.length,
    };
    this.list.push(task);
    localStorage.setItem('memory', JSON.stringify(this.list));
    this.loader();
  }

  delete = (index) => {
    this.list.splice(index, 1);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i;
    }
    localStorage.setItem('memory', JSON.stringify(this.list));

    this.loader();
  }
}