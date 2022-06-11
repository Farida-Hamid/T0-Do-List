export const completeTask = (list) => {
  const boxs = document.querySelectorAll('#done');
  boxs.forEach((box, index) => {
    box.addEventListener('click', () => {
      list[index].completed = !list[index].completed;
      localStorage.setItem('memory', JSON.stringify(list));
    });
  });
}