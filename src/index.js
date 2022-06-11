import './style.css';
import Tasks from './tasks-manager.js';

let list = new Tasks();
list.loader();

const adder = document.getElementById("new-task");

adder.addEventListener("keypress", (e)=> {

  if (e.key === 'Enter' && adder.value) {
      const task = {
        description: adder.value,
        completed: false,
        index: list.length,
      };
      list.add(task);
      list.display(task);
    }
});

// console.log('deleting');
// list.delete();