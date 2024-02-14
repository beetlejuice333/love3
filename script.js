document
  .getElementById("envelope")
  .addEventListener("click", handleEnvelopeInteraction);
document
  .getElementById("envelope")
  .addEventListener("touchstart", handleEnvelopeInteraction);

function handleEnvelopeInteraction(event) {
  // Проверяем, было ли это касание на мобильном устройстве
  const isTouchDevice = event.type === "touchstart";

  // Получаем координаты клика/касания
  const x = isTouchDevice ? event.touches[0].clientX : event.clientX;
  const y = isTouchDevice ? event.touches[0].clientY : event.clientY;

  // Ваш код для обработки клика/касания
  // ...

  // Пример: вызываем функцию обработки клика
  handleEnvelopeClick(x, y);
}

function handleEnvelopeClick(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Пути к изображениям сердечек
  const heartImages = [
    "/heart3.jpg",
    "/heart4.png",
    "/heart5.png",
    "/heart6.png",
    "/heart7.png",
    "/heart8.jpg",
    "/heart9.jpg",
    // Добавьте пути к вашим изображениям сердечек
  ];

  // Выбор случайного изображения
  const randomImage =
    heartImages[Math.floor(Math.random() * heartImages.length)];
  heart.style.background = `url('${randomImage}') center/cover no-repeat`;

  document.querySelector(".envelope").appendChild(heart);

  const randomOffset = Math.random() > 0.5 ? -1 : 1;
  heart.style.left = `calc(${x}px + ${randomOffset * Math.random() * 10}%)`;
  heart.style.top = `calc(${y}px - 10%)`; // Начальная позиция чуть выше места клика
  heart.style.setProperty(
    "--random-offset",
    `${randomOffset * Math.random() * 50}px`
  );

  heart.addEventListener("animationend", function () {
    heart.remove();
  });
}
