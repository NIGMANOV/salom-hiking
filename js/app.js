import "../styles/style.scss";

const images = require.context('../img', false, /\.(png|jpe?g|svg)$/);

// Получить массив путей к файлам
const imagePaths = images.keys().map(images);

// Пример использования
imagePaths.forEach((imagePath) => {
  console.log(imagePath); // Путь к картинке после обработки Webpack
});

