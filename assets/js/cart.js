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

  function initButton(btn){
    if(btn.dataset.cartified) return;
    btn.dataset.cartified = '1';

    const wrap = document.createElement('span');
    wrap.className = 'cart-control';
    const spacer = document.createElement('span');
    spacer.className = 'cart-control__spacer';
    // Fix size to current button
    const w = btn.offsetWidth || 160;
    const h = btn.offsetHeight || 44;
    spacer.style.width = w + 'px';
    spacer.style.height = h + 'px';

    const control = document.createElement('span');
    control.className = 'qty-inline';
    control.innerHTML = `
      <button class="minus" aria-label="Меньше">−</button>
      <input type="number" class="qty-input" value="1" min="0">
      <button class="plus" aria-label="Больше">+</button>
      <button class="to-cart">В корзину</button>
    `;

    const parent = btn.parentElement;
    parent.insertBefore(wrap, btn);
    wrap.appendChild(spacer);
    wrap.appendChild(btn);
    wrap.appendChild(control);

    // Show control over button
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      wrap.classList.add('active');
      control.querySelector('.qty-input').focus();
    });

    const input = control.querySelector('.qty-input');
    const hide = ()=>{ wrap.classList.remove('active'); input.value = '1'; };

    control.querySelector('.minus').addEventListener('click', ()=>{
      const v = Math.max(0, (parseInt(input.value)||0) - 1); input.value = v; if(v===0) hide();
    });
    control.querySelector('.plus').addEventListener('click', ()=>{ input.value = (parseInt(input.value)||0) + 1; });
    control.querySelector('.to-cart').addEventListener('click', ()=>{
      const q = Math.max(1, parseInt(input.value)||0);
      if(q>0){ add({ sku: btn.dataset.sku, name: btn.dataset.name, price: Number(btn.dataset.price) }, q); }
      hide();
    });
    input.addEventListener('keydown', (e)=>{
      if(e.key==='Enter'){ const q = Math.max(1, parseInt(input.value)||0); if(q>0){ add({ sku: btn.dataset.sku, name: btn.dataset.name, price: Number(btn.dataset.price) }, q);} hide(); }
      if(e.key==='Escape'){ hide(); }
    });
    input.addEventListener('blur', ()=>{ const v = parseInt(input.value)||0; if(v<=0) hide(); });

    // Outside click hides
    document.addEventListener('click', (e)=>{
      if(!wrap.contains(e.target) && wrap.classList.contains('active')){
        const v = parseInt(input.value)||0; if(v<=0) hide();
      }
    });
  }

  function hydrate(){ $$('.add-to-cart').forEach(initButton); }

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
    hydrate();
  });
})();
