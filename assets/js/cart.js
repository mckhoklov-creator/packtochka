
(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  function loadCart(){
    try { return JSON.parse(localStorage.getItem('cart')||'[]'); }
    catch(e){ return []; }
  }
  function saveCart(items){
    localStorage.setItem('cart', JSON.stringify(items));
    updateCount();
  }
  function updateCount(){
    const items = loadCart();
    const count = items.reduce((s,i)=>s+i.qty,0);
    const el = $('#cart-count');
    if (el) el.textContent = count;
  }
  function addItem({sku,name,price}){
    const items = loadCart();
    const idx = items.findIndex(x=>x.sku===sku);
    if (idx>=0) items[idx].qty += 1;
    else items.push({sku,name,price: Number(price), qty:1});
    saveCart(items);
  }
  function removeItem(sku){
    const items = loadCart().filter(x=>x.sku!==sku);
    saveCart(items);
    renderCart();
  }
  function changeQty(sku,delta){
    const items = loadCart();
    const it = items.find(x=>x.sku===sku);
    if(!it) return;
    it.qty = Math.max(1, it.qty + delta);
    saveCart(items);
    renderCart();
  }
  function renderCart(){
    const wrap = $('#cart-table');
    if (!wrap) return;
    const items = loadCart();
    if (items.length===0){ wrap.innerHTML = '<p>Корзина пуста.</p>'; return; }
    const rows = items.map(i => `
      <tr>
        <td>${i.name}<br><small>${i.sku}</small></td>
        <td>${i.price}</td>
        <td>
          <button class="qty" data-sku="${i.sku}" data-d="-1">−</button>
          <span class="q">${i.qty}</span>
          <button class="qty" data-sku="${i.sku}" data-d="1">+</button>
        </td>
        <td>${(i.price*i.qty).toFixed(2)}</td>
        <td><button class="rm" data-sku="${i.sku}">Удалить</button></td>
      </tr>
    `).join('');
    const total = items.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2);
    wrap.innerHTML = `
      <table>
        <thead><tr><th>Товар</th><th>Цена</th><th>Кол-во</th><th>Сумма</th><th></th></tr></thead>
        <tbody>${rows}</tbody>
        <tfoot><tr><td colspan="3" style="text-align:right"><strong>Итого</strong></td><td><strong>${total}</strong></td><td></td></tr></tfoot>
      </table>`;
    $$('.qty', wrap).forEach(b=>b.addEventListener('click', e=>{
      changeQty(e.currentTarget.dataset.sku, Number(e.currentTarget.dataset.d));
    }));
    $$('.rm', wrap).forEach(b=>b.addEventListener('click', e=>{
      removeItem(e.currentTarget.dataset.sku);
    }));
  }

  // Bind add-to-cart
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.add-to-cart');
    if (!btn) return;
    addItem({ sku: btn.dataset.sku, name: btn.dataset.name, price: btn.dataset.price });
    alert('Добавлено в корзину');
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    updateCount();
    renderCart();
  });
})();
