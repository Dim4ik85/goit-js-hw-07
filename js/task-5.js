// //Задача  5
//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна
// отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", onInput);

function onInput(event) {
  if (event.currentTarget.value) {
    outputEl.textContent = event.currentTarget.value;
  } else {
    outputEl.textContent = "незнакомец";
  }
}