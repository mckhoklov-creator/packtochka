// cat-images.js — главная страница: подставляем иконки категорий
(function(){
  const base = document.documentElement.getAttribute('data-baseurl') || '';
  function withBase(p){ return (base + p).replace(/\/+/g,'/'); }

  const path = location.pathname;
  const isHome = (path === withBase('/') || path === withBase('/index.html'));
  const isCatalog = path.startsWith(withBase('/katalog/'));
  if (isCatalog) {
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.cats .cat .cat__img img').forEach(el => el.remove());
    });
    return;
  }
  if (!isHome) return;

  const MAP = {
    '/katalog/korobki/': 'cat-korobki.png', // ваша коробка
    '/katalog/pakety/':  'paket.png',       // ваш пакет
    '/katalog/skotch/':  'cat-skotch.png',
    '/katalog/plenka/':  'cat-plenka.png',
    '/katalog/prochie/': 'cat-prochie.png'
  };

  function inject(){
    Object.keys(MAP).forEach(href => {
      const selector = `.cats a[href$="${href}"], .cats a[href$="${withBase(href)}"]`;
      const link = document.querySelector(selector);
      if (!link) return;
      const holder = link.querySelector('.cat__img') || link;
      if (holder.querySelector('img')) return;

      const img = new Image();
      img.alt = (link.querySelector('.cat__cap')?.textContent || 'Категория').trim();
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = withBase('/assets/img/' + MAP[href]);
      img.style.maxWidth = '90%';
      img.style.maxHeight = '70%';
      img.style.objectFit = 'contain';
      holder.prepend(img);
    });
  }

  document.addEventListener('DOMContentLoaded', inject);
})();