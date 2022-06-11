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
      <button class="delete">X</button>
    </li>`;
  }

  loader = () => {
    if(this.list.length > 0) {
      this.list.forEach((task) => this.display(task));
    }
  }
  
  add = (task) => {
    this.list.push(task);
    localStorage.setItem('memory', JSON.stringify(this.list));
  }

  delete = (item) => {
    this.list.forEach((task, index) =>{
      if(task.description === item.description) {
        this.list.remove(index);
        //remove from display
      }
    });
  }
}