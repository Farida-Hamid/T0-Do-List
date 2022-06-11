export const completeTask = (list) => {
  const boxs = document.querySelectorAll('#done');
  boxs.forEach((box, index) => {
    box.addEventListener('click', () => {
      list[index].completed = !list[index].completed;
      localStorage.setItem('memory', JSON.stringify(list));
    });
  });
}

export const clearScreen = (list) => {
  const clear = document.querySelector('#clear');
  clear.addEventListener('click', () => {
    list = list.filter((item) => item.completed === false);
    localStorage.setItem('memory', JSON.stringify([]));
    const listContainer = document.querySelector('#list');
    listContainer.innerHTML = '';
  });
}