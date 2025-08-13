// cat-images.js — вставляет картинки в плитки категорий ТОЛЬКО на главной
(function(){
  const base = document.documentElement.getAttribute('data-baseurl') || '';

  // Помощник: нормализуем путь (с baseurl)
  function withBase(p){ return (base + p).replace(/\/+/g,'/'); }

  // Работать только на главной странице (/, /index.html)
  const path = location.pathname;
  const isHome = (path === withBase('/') || path === withBase('/index.html'));
  const isCatalog = path.startsWith(withBase('/katalog/'));

  // Если мы в каталоге — на всякий случай удалим ранее вставленные картинки (если кэш подменял файл)
  if(isCatalog){
    document.addEventListener('DOMContentLoaded', function(){
      document.querySelectorAll('.cats .cat .cat__img img').forEach(el => el.remove());
    });
    return; // и ничего не вставляем
  }

  if(!isHome) return; // ни на каких других страницах не работаем

  // соответствие: ссылка категории -> файл картинки в assets/img/
  const MAP = {
    '/katalog/korobki/': 'cat-korobki.png',
    '/katalog/pakety/': 'paket.png'
    // сюда позже добавим скотч, плёнку и прочее
  };

  function inject(){
    Object.keys(MAP).forEach(href => {
      const selector = `.cats a[href$="${href}"], .cats a[href$="${withBase(href)}"]`;
      const link = document.querySelector(selector);
      if(!link) return;
      const holder = link.querySelector('.cat__img') || link;
      if(holder.querySelector('img')) return; // уже вставлено

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
