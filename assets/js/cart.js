(function(){
  const sel = (s,c=document)=>c.querySelector(s);
  const selAll = (s,c=document)=>Array.from(c.querySelectorAll(s));

  const CART_KEY = 'cart';

  function load(){ try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch(e){return []} }
  function save(items){ localStorage.setItem(CART_KEY, JSON.stringify(items)); updateCount(); renderModal(); }

  function updateCount(){
    const items = load();
    const n = items.reduce((sum,i)=>sum+(i.qty||1),0);
    const el = sel('#cart-count'); if(el) el.textContent = n;
  }

  function add(item){
    const items = load();
    const i = items.findIndex(x=>x.sku===item.sku);
    if(i>=0){ items[i].qty = (items[i].qty||1)+1; }
    else { items.push({...item, qty: 1}); }
    save(items);
  }

  function remove(sku){
    const items = load().filter(x=>x.sku!==sku);
    save(items);
  }

  function qty(sku, delta){
    const items = load();
    const it = items.find(x=>x.sku===sku);
    if(!it) return;
    it.qty = Math.max(1, (it.qty||1) + delta);
    save(items);
  }

  function renderModal(){
    const body = sel('#cart-body');
    if(!body) return;
    const items = load();
    if(!items.length){
      body.innerHTML = '<p>Корзина пуста.</p>';
      return;
    }
    const rows = items.map(i=>`
      <div class="cart-item">
        <div class="cart-item__name">${i.name}<br><small>${i.sku}</small></div>
        <div class="cart-qty">
          <button class="qty" data-sku="${i.sku}" data-d="-1">−</button>
          <span>${i.qty||1}</span>
          <button class="qty" data-sku="${i.sku}" data-d="1">+</button>
        </div>
        <div class="cart-item__price">${(Number(i.price)*(i.qty||1)).toFixed(2)}</div>
        <button class="rm" data-sku="${i.sku}" title="Удалить">×</button>
      </div>
    `).join('');
    body.innerHTML = rows;
    selAll('.qty', body).forEach(b=>b.addEventListener('click', e=>{
      qty(e.currentTarget.dataset.sku, Number(e.currentTarget.dataset.d));
    }));
    selAll('.rm', body).forEach(b=>b.addEventListener('click', e=>remove(e.currentTarget.dataset.sku)));
  }

  function openModal(){
    const modal = sel('#cart-modal'); if(!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    renderModal();
  }
  function closeModal(){
    const modal = sel('#cart-modal'); if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  document.addEventListener('click', e=>{
    const btn = e.target.closest('.add-to-cart');
    if(btn){
      add({ sku: btn.dataset.sku, name: btn.dataset.name, price: Number(btn.dataset.price) });
      // опционально уведомление
      return;
    }
    if(e.target.closest('#open-cart')){ e.preventDefault(); openModal(); }
    if(e.target.closest('#close-cart') || e.target.closest('#cart-backdrop')){ closeModal(); }
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    updateCount();
    renderModal();
  });
})(); 
