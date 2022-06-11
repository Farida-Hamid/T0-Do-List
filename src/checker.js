export const completeTask = (list) => {
  const boxs = document.querySelectorAll('#done');
  boxs.forEach((box, index) => {
    box.addEventListener('click', () => {
      list[index].completed = !list[index].completed;
      console.log('changed', index, 'to', list[index].completed);
    });
  });
}