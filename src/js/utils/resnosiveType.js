(function () {
  // Настройки

  const responsiveType = 1; // 1 - адаптивный, 0 - по брейкпоинтам

  // Получаем все контейнеры
  const containers = document.querySelectorAll('[class*="__container"]');

  // Применяем стили в зависимости от responsiveType
  if (responsiveType === 1) {
    console.log('responsive type - 1 ');
    containers.forEach(container => {
      container.classList.remove('breakpoint');
    });
  } else {
    console.log('responsive type - 0');
    containers.forEach(container => {
      container.classList.add('breakpoint');
    });
  }
})();
