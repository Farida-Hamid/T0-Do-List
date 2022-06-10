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

  loader = () => {
    const listContainer = document.querySelector('#list');
    console.log("I want to load", this.list);
    if(this.list.length > 0) {
      this.list.forEach((task) => {
        listContainer.innerHTML += `
        <li>
          <input type="checkbox">
          <p>${task.description}</p>
        </li>`;
      });
    }
    else{console.log("nothing to load");}
  }
  
  add = (desc) => {
    const task = {
      description: desc,
      completed: false,
      index: this.list.length,
    };
    
    this.list.push(task);
    localStorage.setItem('memory', JSON.stringify(this.list));
  }
}