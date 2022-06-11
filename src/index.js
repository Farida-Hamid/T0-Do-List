import './style.css';
import Tasks from './tasks-manager.js';
// import Check from './checker';

const list = new Tasks();
list.loader();

const adder = document.getElementById('new-task');

adder.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && adder.value) {
    list.add(adder.value);
    adder.value = '';
  }
});

// const checker = new Check();
// console.log('check = ', checker);
// checker.clearScreen();
// checker.completeTask();