(function(){
  const $ = (s,c=document)=>c.querySelector(s);
  const $$ = (s,c=document)=>Array.from(c.querySelectorAll(s));
  function load(){ try{return JSON.parse(localStorage.getItem('cart')||'[]')}catch(e){return []}}
  function save(v){ localStorage.setItem('cart', JSON.stringify(v)); upd(); }
  function upd(){ const n=load().reduce((s,i)=>s+(i.qty||1),0); const el=$('#cart-count'); if(el) el.textContent=n; }
  function add(it){ const a=load(); const i=a.findIndex(x=>x.sku===it.sku); if(i>=0)a[i].qty=(a[i].qty||1)+1; else a.push({...it, qty:1}); save(a); }
  function rm(sku){ save(load().filter(x=>x.sku!==sku)); render(); }
  function qty(sku,d){ const a=load(); const it=a.find(x=>x.sku===sku); if(!it)return; it.qty=Math.max(1,(it.qty||1)+d); save(a); render(); }
  function render(){
    const w = $('#cart-table'); if(!w) return;
    const a = load(); if(!a.length){ w.innerHTML='<p>Корзина пуста.</p>'; return; }
    const rows=a.map(i=>`<tr><td>${i.name}<br><small>${i.sku}</small></td><td>${i.price}</td>
      <td><button class="qty" data-sku="${i.sku}" data-d="-1">−</button> <span>${i.qty||1}</span> <button class="qty" data-sku="${i.sku}" data-d="1">+</button></td>
      <td>${(i.price*(i.qty||1)).toFixed(2)}</td><td><button class="rm" data-sku="${i.sku}">Удалить</button></td></tr>`).join('');
    const total=a.reduce((s,i)=>s+i.price*(i.qty||1),0).toFixed(2);
    w.innerHTML = `<table><thead><tr><th>Товар</th><th>Цена</th><th>Кол-во</th><th>Сумма</th><th></th></tr></thead><tbody>${rows}</tbody><tfoot><tr><td colspan="3" style="text-align:right"><strong>Итого</strong></td><td><strong>${total}</strong></td><td></td></tr></tfoot></table>`;
    $$('.qty',w).forEach(b=>b.addEventListener('click',e=>qty(e.currentTarget.dataset.sku, Number(e.currentTarget.dataset.d))));
    $$('.rm',w).forEach(b=>b.addEventListener('click',e=>rm(e.currentTarget.dataset.sku)));
  }
  document.addEventListener('click', e=>{ const b=e.target.closest('.add-to-cart'); if(!b)return; add({sku:b.dataset.sku,name:b.dataset.name,price:Number(b.dataset.price)}); alert('Добавлено в корзину'); });
  document.addEventListener('DOMContentLoaded', ()=>{ upd(); render(); });
})();
