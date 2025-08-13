// cat-images.js — вставляет картинки в плитки категорий на главной
(function(){
  const base = document.documentElement.getAttribute('data-baseurl') || '';
  const MAP = {
    '/katalog/korobki/': 'cat-korobki.png',
    '/katalog/pakety/': 'paket.png'
  };

  function inject(){
    Object.keys(MAP).forEach(href => {
      // ищем плитку категории по ссылке (учитываем baseurl в начале)
      const selector = `.cats a[href$="${href}"], .cats a[href$="${base}${href}"]`;
      const link = document.querySelector(selector);
      if(!link) return;
      const holder = link.querySelector('.cat__img') || link;
      if(holder.querySelector('img')) return;

      const img = new Image();
      img.alt = (link.querySelector('.cat__cap')?.textContent || 'Категория').trim();
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = `${base}/assets/img/${MAP[href]}`;
      img.style.maxWidth = '90%';
      img.style.maxHeight = '70%';
      img.style.objectFit = 'contain';
      holder.prepend(img);
    });
  }

  document.addEventListener('DOMContentLoaded', inject);
})();
