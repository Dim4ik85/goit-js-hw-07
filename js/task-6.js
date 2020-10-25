
//Задача 6
//скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// - Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// - Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validation);

function validation() {
  if (inputEl.value.length < inputEl.dataset.length) {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}

