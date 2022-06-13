export const completeTask = (list) => {
  const boxs = document.querySelectorAll('#done');
  boxs.forEach((box, index) => {
    box.addEventListener('click', () => {
      const change = document.querySelectorAll('.change');
      change[index].classList.toggle('finished');
      list[index].completed = !list[index].completed;
      localStorage.setItem('memory', JSON.stringify(list));
    });
  });
};

export const clearScreen = (list) => {
  const clear = document.querySelector('#clear');
  clear.addEventListener('click', () => {
    list = list.filter((item) => item.completed === false);
    for (let i = 0; i < list.length; i += 1) {
      list[i].index = i;
    }
    localStorage.setItem('memory', JSON.stringify(list));
    window.location.reload();
  });
};