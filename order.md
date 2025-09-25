---
layout: default
title: "Оформление заказа"
description: "Отправьте заказ менеджеру. Мы свяжемся и выставим счёт."
permalink: /order/
---

<h1>Оформление заказа</h1>

<form id="order-form" method="POST" action="https://formspree.io/f/{{ site.formspree_form_id | strip }}">
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

  <!-- JSON корзины -->
  <input type="hidden" name="cart_json" id="cart_json">

  <!-- Нативный редирект (fallback). На Free-плане может игнорироваться, поэтому ниже ещё JS-редирект -->
  <input type="hidden" name="_redirect" value="{{ site.url }}{{ site.thankyou_url | default: '/spasibo/' }}">

  <div class="mb-3">
    <label class="form-label">Комментарий</label>
    <textarea class="form-control" name="comment" placeholder="Удобное время звонка, особенности доставки и т.д."></textarea>
  </div>

  <button type="submit" class="btn btn-gradient">Отправить заказ</button>
</form>

<script>
(function () {
  function initOrderForm() {
    var form = document.getElementById('order-form');
    if (!form) return;

    // Проброс корзины
    try {
      var cartField = document.getElementById('cart_json');
      var cart = JSON.parse(localStorage.getItem('cart') || '[]');
      if (cartField) cartField.value = JSON.stringify(cart);
    } catch (e) { /* no-op */ }

    // Гарантированный редирект через JS (работает на любом тарифе)
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var redirectTo = "{{ site.url }}{{ site.thankyou_url | default: '/spasibo/' }}";
      fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      }).then(function (res) {
        if (res.ok) {
          window.location.href = redirectTo;
        } else {
          // fallback на стандартную страницу Formspree
          window.location.href = 'https://formspree.io/thanks';
        }
      }).catch(function () {
        window.location.href = 'https://formspree.io/thanks';
      });
    }, { once: true });
  }

  // Инициализируем и до, и после загрузки DOM — чтобы не промахнуться по событию
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initOrderForm);
  } else {
    initOrderForm();
  }
})();
</script>
