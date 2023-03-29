var name = prompt("Введите ваше имя:");
var word2 = prompt("Введите вашу фамилию:");
var age = prompt("Введите ваш возраст:");

if (isNaN(age)) {
  console.log("Возраст должен быть числом.");
} else {
  if (age < 18) {
    console.log(`Привет, ${name}!`);
  } else if (age >= 18 && age < 50) {
    console.log(`Здравствуйте, ${word2} ${name}!`);
  } else if (age >= 50 && age < 80) {
    console.log(`Добро пожаловать, ${word2} ${name}!`);
  } else {
    console.log("Вы ввели неверный возраст.");
  }
}
