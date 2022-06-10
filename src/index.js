import './style.css';

const list = [
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

const listContainer = document.querySelector('#list');

const loader = () => {
  list.forEach((task) => {
    listContainer.innerHTML += `
    <li>
      <input type="checkbox">
      <p>${task.description}</p>
    </li>`;
  });
};

loader();