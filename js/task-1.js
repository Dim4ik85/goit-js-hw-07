// Задача #1
// Посчитать количество категорий ul#categories, то есть элементов li.item

const itemInCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemInCategories.length} категории`);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль
// текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

itemInCategories.forEach(item =>{
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество єлементов: ${item.querySelectorAll('li').length}`);
});