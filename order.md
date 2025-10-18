---
layout: default
title: "Оформление заказа — упаковочные материалы | ПакТочка"
description: "Заполните форму для оформления заказа. Самовывоз в Екатеринбурге, доставка по всей России."
permalink: /order/
---

<div class="order-header">
  <h1>Оформление заказа</h1>
  <p class="lead-muted">Отправьте заявку — мы свяжемся, уточним детали и выставим счёт.</p>
</div>

<div class="form-card">
  <!-- Яндекс.Форма -->
  <script src="https://forms.yandex.ru/_static/embed.js"></script>
  <iframe
    src="https://forms.yandex.ru/cloud/68f3c6a1d04688752518f4a0?iframe=1"
    name="ya-form-68f3c6a10d4688752518f4a0"
    frameborder="0"
    allow="clipboard-write; fullscreen"
    title="Форма оформления заказа"
  ></iframe>
</div>

<style>
  /* Центровка заголовка и подзаголовка */
  .order-header {
    text-align: center;
    margin: 10px 0 30px;
  }

  .order-header h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .lead-muted {
    color: #6b7280;
    font-size: 15px;
    margin: 0;
  }

  /* Карточка под стиль сайта */
  .form-card {
    max-width: 900px;
    margin: 0 auto 48px;
    padding: 18px;
    background: #fff;
    border: 1px solid #e8e8f0;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(20, 20, 43, 0.06);
  }

  .form-card iframe {
    display: block;
    width: 100%;
    min-height: 900px;
    height: 85vh;
    border: 0;
    border-radius: 14px;
    background: #fff;
  }

  @media (max-width: 640px) {
    .form-card {
      padding: 12px;
      border-radius: 16px;
      margin-bottom: 36px;
    }

    .form-card iframe {
      min-height: 1000px;
      height: 92vh;
      border-radius: 12px;
    }
  }
</style>
