// cat-images.js — вставляет картинки в плитки категорий на главной
(function(){
  const base = document.documentElement.getAttribute('data-baseurl') || '';
  // соответствие: ссылка категории -> файл картинки в assets/img/
  const MAP = {
    '/katalog/korobki/': 'cat-korobki.png'
  };

  function inject(){
    Object.keys(MAP).forEach(href => {
      // ищем плитку категории по ссылке
      const link = document.querySelector(`.cats a[href$="${href}"]`);
      if(!link) return;
      const holder = link.querySelector('.cat__img') || link;
      if(holder.querySelector('img')) return; // уже вставлено

      const img = new Image();
      img.alt = (link.querySelector('.cat__cap')?.textContent || 'Категория').trim();
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = `${base}/assets/img/${MAP[href]}`;
      img.style.maxWidth = '92%';
      img.style.maxHeight = '92%';
      img.style.objectFit = 'contain';
      holder.prepend(img);
    });
  }

  document.addEventListener('DOMContentLoaded', inject);
})();