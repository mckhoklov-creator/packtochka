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

  // Inline controls on cards without layout shift
  function ensureControlWrapper(btn){
    // if parent not wrapper, wrap
    if(!btn.parentElement.classList.contains('cart-control')){
      const wrap = document.createElement('span');
      wrap.className = 'cart-control';
      btn.parentElement.insertBefore(wrap, btn);
      wrap.appendChild(btn);
    }
    return btn.parentElement;
  }

  function showInlineControl(btn){
    const wrap = ensureControlWrapper(btn);
    // Already visible?
    if(wrap.querySelector('.qty-inline')) { wrap.querySelector('.qty-inline input').focus(); return; }
    // Build control
    const sku = btn.dataset.sku, name = btn.dataset.name, price = Number(btn.dataset.price);
    const control = document.createElement('span');
    control.className = 'qty-inline';
    control.innerHTML = `
      <button class="minus" aria-label="Меньше">−</button>
      <input type="number" class="qty-input" value="1" min="0">
      <button class="plus" aria-label="Больше">+</button>
      <button class="to-cart">В корзину</button>
    `;
    wrap.appendChild(control);
    btn.style.display = 'none';

    const input = control.querySelector('.qty-input');
    control.querySelector('.minus').addEventListener('click', ()=>{
      const v = Math.max(0, (parseInt(input.value)||0) - 1); input.value = v; if(v===0) hideInlineControl(wrap, btn);
    });
    control.querySelector('.plus').addEventListener('click', ()=>{ input.value = (parseInt(input.value)||0) + 1; });
    control.querySelector('.to-cart').addEventListener('click', ()=>{
      const q = Math.max(1, parseInt(input.value)||0);
      add({sku, name, price}, q);
      hideInlineControl(wrap, btn);
    });
    input.addEventListener('input', ()=>{
      const v = parseInt(input.value)||0;
      if(v<=0) { /* keep visible but allow outside-click to hide */ }
    });
    input.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter'){
        const q = Math.max(1, parseInt(input.value)||0);
        if(q>0){ add({sku, name, price}, q); hideInlineControl(wrap, btn); }
        else { hideInlineControl(wrap, btn); }
      }
      if(e.key === 'Escape'){ hideInlineControl(wrap, btn); }
    });

    // Outside click hides control
    const onDocClick = (e)=>{
      if(!control.contains(e.target) && e.target!==btn){
        const v = parseInt(input.value)||0;
        if(v<=0) hideInlineControl(wrap, btn);
        document.removeEventListener('click', onDocClick);
      }
    };
    setTimeout(()=>document.addEventListener('click', onDocClick), 0);
  }

  function hideInlineControl(wrap, btn){
    const control = wrap.querySelector('.qty-inline');
    if(control) control.remove();
    btn.style.display = 'inline-flex';
  }

  function hydrateButtons(){
    $$('.add-to-cart').forEach(btn=>{
      btn.addEventListener('click', (e)=>{
        e.preventDefault();
        showInlineControl(btn);
      });
      // make sure base button has proper class for sizing
      btn.classList.add('btn','btn-gradient');
    });
  }

  // Modal open/close
  function openModal(){ const m=$('#cart-modal'); if(!m) return; m.classList.add('open'); m.setAttribute('aria-hidden','false'); renderModal(); }
  function closeModal(){ const m=$('#cart-modal'); if(!m) return; m.classList.remove('open'); m.setAttribute('aria-hidden','true'); }

  document.addEventListener('click', e=>{
    if(e.target.closest('#open-cart')){ e.preventDefault(); openModal(); }
    if(e.target.closest('#close-cart') || e.target.closest('#cart-backdrop')){ closeModal(); }
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    updateCount();
    renderModal();
    hydrateButtons();
  });
})();
