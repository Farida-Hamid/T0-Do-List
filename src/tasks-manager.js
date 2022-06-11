import { forEach } from "lodash";

export default class Tasks {
  constructor () {
  //   this.list = [];
  //   console.log("after init lis = ", this.list);
    this.list = this.get();
    console.log("after get lis = ", this.list);
  }

  get = () => {
    // let list;
    const data = localStorage.getItem('memory');
    if (!data) {
      console.log('yeah I loaded nothing =', data);
      this.list = [];
    } else {
      console.log('Oh I found =', data);
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
    console.log("I want to load", this.list);
    if(this.list.length > 0) {
      this.list.forEach((task) => this.display(task));
    }
    else{console.log("nothing to load");}
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