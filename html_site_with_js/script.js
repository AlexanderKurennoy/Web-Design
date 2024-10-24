// Подяка за покупку при натисканні на кнопку "BUY!"
const buyButtons = document.querySelectorAll('button');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Дякуємо за покупку!');
  });
});

// Запитати користувача колір фону сайту
const userColor = prompt('Який колір фону ви хочете встановити? (наприклад, red, blue, #000000)');
if (userColor) {
  document.body.style.backgroundColor = userColor;
}

// Зміна тексту заголовка при натисканні
const header = document.querySelector('header h1');
header.addEventListener('click', () => {
  const newText = prompt('Введіть новий текст для заголовка:');
  if (newText) {
    header.textContent = newText;
  }
});