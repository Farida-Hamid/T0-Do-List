import './style.css';
import Tasks from './tasks-manager.js';

let list = new Tasks();
list.loader();

const adder = document.getElementById("new-task");

// adder.addEventListener("keypress", (e)=> {

//   if (e.key === 'Enter' && adder.value) {
//     let num = list.length;
//     console.log('index = ',num);
//       const task = {
//         description: adder.value,
//         completed: false,
//         index: list.length,
//       };
//       console.log('added', task);
//       list.add(task);
//       list.display(task);
//     }
// });

// console.log('deleting');
// list.delete();

adder.addEventListener("keypress", (e)=> {

  if (e.key === 'Enter' && adder.value) {
      list.add(adder.value);
    }
});