import './style.css';
import Tasks from './tasks-manager.js';

// const list = [
//   {
//     description: 'Wake up at 6',
//     completed: false,
//     index: 1,
//   },
//   {
//     description: 'Pray',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'Make breakfast',
//     completed: false,
//     index: 3,
//   },
// ];

let list = new Tasks();
console.log("list = ", list);
console.log('loading');
list.loader();
console.log('loaded');

const adder = document.getElementById("new-task");
console.log(adder);

adder.addEventListener("keypress", (e)=> {
  // e.preventDefault();
  console.log("here");
    if (e.key === 'Enter' && adder.value) {
      console.log("entered");
      console.log(adder.value);
      list.add(adder.value);
    }
  });