
---
layout: default
title: "Оформление заказа"
description: "Отправьте заказ менеджеру. Мы свяжемся и выставим счёт."
permalink: /order/
---

<h1>Оформление заказа</h1>
<form id="order-form" method="POST" action="https://formspree.io/f/XXXXXXXX">
  <div class="form-row">
    <label>Ваше имя</label>
    <input type="text" name="name" required>
  </div>
  <div class="form-row">
    <label>Телефон</label>
    <input type="tel" name="phone" required>
  </div>
  <div class="form-row">
    <label>Email</label>
    <input type="email" name="email" required>
  </div>
  <div class="form-row">
    <label>Статус</label>
    <select name="customer_type" required>
      <option value="fiz">Физическое лицо</option>
      <option value="ip">ИП</option>
      <option value="ooo">ООО</option>
    </select>
  </div>
  <input type="hidden" name="cart_json" id="cart_json">
  <div class="form-row">
    <label>Комментарий</label>
    <textarea name="comment" placeholder="Удобное время звонка, особенности доставки и т.д."></textarea>
  </div>
  <button type="submit" class="btn">Отправить заказ</button>
  <p class="muted">После отправки менеджер свяжется с вами, уточнит детали и выставит счёт.</p>
</form>

<script>
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('cart_json').value = JSON.stringify(cart);
});
</script>
