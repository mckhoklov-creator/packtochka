(function(){
  const $ = (s,c=document)=>c.querySelector(s);
  const $$ = (s,c=document)=>Array.from(c.querySelectorAll(s));
  const KEY = 'cart';

  function load(){ try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return []} }
  function save(v){ localStorage.setItem(KEY, JSON.stringify(v)); updateCount(); renderModal(); }

  function updateCount(){ const n = load().reduce((s,i)=>s+(i.qty||1),0); const el=$('#cart-count'); if(el) el.textContent=n; }

  function add(it, qty=1){
    const a = load();
    const i = a.findIndex(x=>x.sku===it.sku);
    if(i>=0){ a[i].qty = (a[i].qty||1) + qty; }
    else { a.push({...it, qty: qty}); }
    save(a);
  }

  function setQty(sku, qty){
    const a = load();
    const it = a.find(x=>x.sku===sku);
    if(!it) return;
    it.qty = Math.max(1, qty|0);
    save(a);
  }

  function rm(sku){ save(load().filter(x=>x.sku!==sku)); }

  function qtyDelta(sku, d){ const a=load(); const it=a.find(x=>x.sku===sku); if(!it)return; it.qty=Math.max(1,(it.qty||1)+d); save(a); }

  function renderModal(){
    const w = $('#cart-body'); if(!w) return;
    const a = load(); if(!a.length){ w.innerHTML = '<p>Корзина пуста.</p>'; return; }
    const rows = a.map(i=>`<div class="cart-item">
        <div class="cart-item__name">${i.name}<br><small>${i.sku}</small></div>
        <div class="cart-qty">
          <button class="qty" data-sku="${i.sku}" data-d="-1">−</button>
          <span>${i.qty||1}</span>
          <button class="qty" data-sku="${i.sku}" data-d="1">+</button>
        </div>
        <div class="cart-item__price">${(Number(i.price)*(i.qty||1)).toFixed(2)}</div>
        <button class="rm" data-sku="${i.sku}">×</button>
      </div>`).join('');
    w.innerHTML = rows;
    $$('.qty',w).forEach(b=>b.addEventListener('click',e=>qtyDelta(e.currentTarget.dataset.sku, Number(e.currentTarget.dataset.d))));
    $$('.rm',w).forEach(b=>b.addEventListener('click',e=>rm(e.currentTarget.dataset.sku)));
  }

  // Inline controls on cards
  function renderInlineControls(btn){
    const sku = btn.dataset.sku, name = btn.dataset.name, price = Number(btn.dataset.price);
    const wrap = document.createElement('div'); wrap.className='qty-inline';
    wrap.innerHTML = `
      <button class="minus" aria-label="Меньше">−</button>
      <input type="number" class="qty-input" value="1" min="1">
      <button class="plus" aria-label="Больше">+</button>
      <button class="to-cart">В корзину</button>
    `;
    btn.replaceWith(wrap);
    const input = $('.qty-input', wrap);
    $('.minus', wrap).addEventListener('click', ()=>{ input.value = Math.max(1, (parseInt(input.value)||1)-1); });
    $('.plus', wrap).addEventListener('click', ()=>{ input.value = (parseInt(input.value)||1)+1; });
    $('.to-cart', wrap).addEventListener('click', ()=>{
      add({sku, name, price}, parseInt(input.value)||1);
    });
  }

  function hydrateExistingButtons(){
    $$('.add-to-cart').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        renderInlineControls(btn);
      }, {once:true});
    });
  }

  // Open/close modal
  function openModal(){ const m=$('#cart-modal'); if(!m) return; m.classList.add('open'); m.setAttribute('aria-hidden','false'); renderModal(); }
  function closeModal(){ const m=$('#cart-modal'); if(!m) return; m.classList.remove('open'); m.setAttribute('aria-hidden','true'); }

  document.addEventListener('click', e=>{
    if(e.target.closest('#open-cart')){ e.preventDefault(); openModal(); }
    if(e.target.closest('#close-cart') || e.target.closest('#cart-backdrop')){ closeModal(); }
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    updateCount();
    renderModal();
    hydrateExistingButtons();
  });
})();
