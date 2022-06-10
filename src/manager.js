export default class Tasks {
  constructor () {
    this.list = this.get();
  }

  get = () => {
    let list;
    const data = localStorage.getItem('memory');
    if (!data) {
      list = [];
    } else {
      list = JSON.parse(data);
    }
    return list;
  }

  
}