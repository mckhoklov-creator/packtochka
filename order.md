---
layout: default
title: "Оформление заказа — упаковочные материалы | ПакТочка"
description: "Заполните форму для оформления заказа. Самовывоз в Екатеринбурге, доставка по всей России."
permalink: /order/
---

<h1>Оформление заказа</h1>

<p class="lead-muted">Отправьте заявку — мы свяжемся, уточним детали и выставим счёт.</p>

<div class="form-card">
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
  .lead-muted{
    margin: 6px 0 18px;
    color:#6b7280;
    font-size:15px;
  }

  /* Карточка-обёртка под стиль сайта */
  .form-card{
    max-width: 900px;
    margin: 0 auto 48px;
    padding: 18px;
    background: #fff;
    border: 1px solid #e8e8f0;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(20,20,43,.06);
  }

  /* Сам iframe делаем адаптивным */
  .form-card iframe{
    display:block;
    width: 100%;
    min-height: 900px;     /* достаточно для длинной формы */
    height: 85vh;          /* адаптивно к экрану */
    border: 0;             /* граница есть у карточки, не у iframe */
    border-radius: 14px;   /* мягко скругляем углы содержимого */
    background: #fff;
  }

  @media (max-width: 640px){
    .form-card{
      padding: 12px;
      border-radius: 16px;
      margin-bottom: 36px;
    }
    .form-card iframe{
      min-height: 1000px;
      height: 92vh;
      border-radius: 12px;
    }
  }
</style>
