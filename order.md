---
layout: default
title: "Оформление заказа — упаковочные материалы | ПакТочка"
description: "Отправьте заявку на упаковочные материалы. Мы свяжемся с вами, уточним детали и выставим счёт."
permalink: /order/
---

<div class="order-header">
  <h1>Оформление заказа</h1>
  <p class="lead-muted">Заполните форму — менеджер свяжется с вами в ближайшее время.</p>
</div>

<form action="https://formcarry.com/s/N7tSL3Gk8ZW" method="POST" class="formcarry-form">
  <!-- скрытое поле для редиректа -->
  <input type="hidden" name="_redirect" value="https://packtochka.ru/spasibo/">

  <label>Ваше имя *</label>
  <input type="text" name="name" placeholder="Введите ваше имя" required>

  <label>Телефон *</label>
  <input type="tel" name="phone" placeholder="+7 (___) ___-__-__" required>

  <label>Email *</label>
  <input type="email" name="email" placeholder="example@mail.ru" required>

  <fieldset class="status-group">
    <legend>Статус *</legend>
    <label><input type="radio" name="status" value="Физическое лицо" required> Физическое лицо</label>
    <label><input type="radio" name="status" value="ИП"> ИП</label>
    <label><input type="radio" name="status" value="ООО"> ООО</label>
  </fieldset>

  <label>Комментарий</label>
  <textarea name="comment" rows="4" placeholder="Удобное время звонка, детали заказа..."></textarea>

  <button type="submit">Отправить заявку</button>
</form>

<style>
  .order-header {
    text-align: center;
    margin: 10px 0 25px;
  }
  .lead-muted {
    color: #6b7280;
    font-size: 15px;
  }

  .formcarry-form {
    max-width: 540px;
    margin: 0 auto 60px;
    padding: 24px 28px;
    background: #fff;
    border: 1px solid #e8e8f0;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(20, 20, 43, 0.06);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .formcarry-form label {
    font-weight: 600;
    font-size: 14px;
    color: #333;
  }

  .formcarry-form input,
  .formcarry-form textarea {
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .formcarry-form input:focus,
  .formcarry-form textarea:focus {
    border-color: #7B61FF;
    box-shadow: 0 0 0 2px rgba(123,97,255,0.15);
  }

  /* Блок статуса */
  .status-group {
    border: none;
    margin-top: 8px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .status-group legend {
    font-weight: 600;
    margin-bottom: 4px;
    color: #333;
    font-size: 14px;
  }

  .status-group label {
    font-weight: 400;
    font-size: 14px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .status-group input[type="radio"] {
    accent-color: #7B61FF;
    width: 16px;
    height: 16px;
  }

  /* Кнопка отправки */
  .formcarry-form button {
    margin-top: 10px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background: linear-gradient(90deg, #7B61FF 0%, #6C8BFF 100%);
    box-shadow: 0 4px 20px rgba(123,97,255,0.3);
    transition: opacity 0.2s;
  }

  .formcarry-form button:hover {
    opacity: 0.9;
  }

  @media (max-width: 640px) {
    .formcarry-form {
      margin: 0 10px 40px;
      padding: 20px;
    }
  }
</style>
