(function(){
  function onSubmit(e){
    e.preventDefault();
    const q = (document.getElementById('q')?.value || '').trim();
    const base = (document.documentElement.getAttribute('data-baseurl') || '');
    const url = base + '/katalog/?q=' + encodeURIComponent(q);
    if(location.pathname.indexOf('/katalog/')===0){ applyFilter(q); history.replaceState(null,'',url); }
    else { location.href = url; }
  }

  function applyFilter(q){
    const term = (q||'').toLowerCase();
    const cards = document.querySelectorAll('.card, .prod-card');
    cards.forEach(c=>{
      const t = (c.querySelector('h3, .title')?.textContent || '').toLowerCase();
      c.style.display = (!term || t.indexOf(term)>=0) ? '' : 'none';
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    const f = document.getElementById('site-search');
    if(f) f.addEventListener('submit', onSubmit);
    const params = new URLSearchParams(location.search);
    if(params.has('q')){ applyFilter(params.get('q')); }
  });
})();
