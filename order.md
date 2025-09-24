---
layout: default
title: "Оформление заказа"
description: "Отправьте заказ менеджеру. Мы свяжемся и выставим счёт."
permalink: /order/
---
<h1>Оформление заказа</h1>
<form id="order-form" method="POST" action="https://formspree.io/f/mzzvywbq">
  <div class="mb-3">
    <label class="form-label">Ваше имя</label>
    <input class="form-control" type="text" name="name" required>
  </div>

  <div class="mb-3">
    <label class="form-label">Телефон</label>
    <input class="form-control" type="tel" name="phone" required>
  </div>

  <div class="mb-3">
    <label class="form-label">Email</label>
    <input class="form-control" type="email" name="email" required>
  </div>

  <div class="mb-3">
    <label class="form-label">Статус</label>
    <select class="form-select" name="customer_type" required>
      <option value="fiz">Физическое лицо</option>
      <option value="ip">ИП</option>
      <option value="ooo">ООО</option>
    </select>
  </div>

  <!-- тут твой JSON-корзины -->
  <input type="hidden" name="cart_json" id="cart_json">

  <div class="mb-3">
    <label class="form-label">Комментарий</label>
    <textarea class="form-control" name="comment" placeholder="Удобное время звонка, особенности доставки и т.д."></textarea>
  </div>

  <!-- 🔥 вот сюда добавляем редирект -->
  <input type="hidden" name="_redirect" value="https://packtochka.ru/spasibo/">

  <button type="submit" class="btn btn-gradient">Отправить заказ</button>
</form>
<script>
document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('cart_json').value = JSON.stringify(cart);
});
</script>
