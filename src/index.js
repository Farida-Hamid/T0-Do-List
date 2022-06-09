import _ from 'lodash';
import './style.css';

let list = [
  {
    description: 'Wake up at 6',
    completed: false,
    index: 1,
  },
  {
    description: 'Pray',
    completed: false,
    index: 2,
  },
  {
    description: 'Make breakfast',
    completed: false,
    index: 3,
  },
];



function component() {
  const element = document.createElement('div');
  // const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;

  // element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
// import _ from 'lodash';
// import printMe from './print.js';

//  function component() {
//    const element = document.createElement('div');
//   const btn = document.createElement('button');

//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//    return element;
//  }

//  document.body.appendChild(component());