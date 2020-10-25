//Задача 2
//
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients');

const elements = ingredients.map(item => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.textContent = item;
  return itemOfIngredients;
});

listIngredients.append(...elements);
console.log(listIngredients);