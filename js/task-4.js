//Задача 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;

const valueSpan = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const refresh = function () {
  valueSpan.textContent = counterValue;
};

const increment = function () {
  counterValue += 1;
  refresh();
};

const decrement = function () {
  counterValue -= 1;
  refresh();
};

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);