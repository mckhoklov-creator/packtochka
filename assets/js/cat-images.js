// cat-images.js — главная страница: подставляем иконки категорий
(function(){
  const base = document.documentElement.getAttribute('data-baseurl') || '';
  function withBase(p){ return (base + p).replace(/\/+/g,'/'); }

  const path = location.pathname;
  const isHome = (path === withBase('/') || path === withBase('/index.html'));
  const isCatalog = path.startsWith(withBase('/katalog/'));
  if (isCatalog || !isHome) {
    return;
  }

  const MAP = {
    '/katalog/korobki/': 'cat-korobki.png', // ваша коробка
    '/katalog/pakety/':           'paket.png',
    '/katalog/skotch/':           'cat-skotch.png',
    '/katalog/plenka/':           'cat-plenka.png',
    '/katalog/pupyrchataya-plenka/': 'pupirchataya-plenka-1-5x100m.png',
    '/katalog/gofrorulony/':      'gofrorulon-dvuhsloiny-1050mm-20m.png',
    '/katalog/bopp-pakety/':      'paket-kurierski-190x240.png',
    '/katalog/kraftovaya-bumaga/': 'bumaga-kraftovaya-840x150.png',
    '/katalog/prochie/':          'cat-prochie.png'
  };

  function inject(){
    Object.keys(MAP).forEach(href => {
      const selector = `.home-section .cats a[href$="${href}"], .home-section .cats a[href$="${withBase(href)}"]`;
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