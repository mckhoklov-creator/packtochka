
// Автоматически подставляет картинки в плитки категорий.
// Достаточно загрузить файлы в assets/img/ и подключить этот скрипт.
(function(){
  const base = document.documentElement.getAttribute('data-baseurl') || '';
  // Сопоставление href категории -> имя файла (PNG/WebP)
  const MAP = {
    '/katalog/korobki/': 'cat-korobki.png',
    // '/katalog/pakety/': 'cat-pakety.png',
    // '/katalog/skotch/': 'cat-skotch.png',
    // '/katalog/plenka/': 'cat-plenka.png',
    // '/katalog/prochie/': 'cat-prochie.png',
  };

  function inject(){
    Object.keys(MAP).forEach(href => {
      const link = document.querySelector(`.cats a[href$="${href}"]`);
      if(!link) return;
      const holder = link.querySelector('.cat__img') || link;
      // Не дублируем, если уже есть <img>
      if(holder.querySelector('img')) return;
      const img = new Image();
      img.alt = link.textContent.trim();
      img.loading = 'lazy';
      img.src = `${base}/assets/img/${MAP[href]}`;
      holder.prepend(img);
    });
  }

  document.addEventListener('DOMContentLoaded', inject);
})();
