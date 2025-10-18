---
layout: default
title: "Оформление заказа — упаковочные материалы | ПакТочка"
description: "Заполните форму для оформления заказа. Свяжемся, уточним детали и выставим счёт. Самовывоз в Екатеринбурге, доставка по всей России."
permalink: /order/
---

<h1>Оформление заказа</h1>

<div class="ya-form-wrap">
  <!-- Яндекс.Форма -->
  <script src="https://forms.yandex.ru/_static/embed.js"></script>
  <iframe
    src="https://forms.yandex.ru/cloud/68f3c6a10d4688752518f4a0/?iframe=1"
    name="ya-form-68f3c6a10d4688752518f4a0"
    frameborder="0"
    allow="clipboard-write; fullscreen"
    title="Форма оформления заказа"
  ></iframe>

  <noscript>
    <p>Чтобы отправить форму, включите JavaScript или перейдите по ссылке:
      <a href="https://forms.yandex.ru/cloud/68f3c6a10d4688752518f4a0/" target="_blank" rel="noopener">Открыть форму в новом окне</a>
    </p>
  </noscript>
</div>

<style>
  /* Контейнер формы — центрируем, ограничиваем ширину */
  .ya-form-wrap {
    max-width: 880px;
    margin: 12px auto 40px;
    padding: 0;
  }

  /* Сам iframe — адаптивная высота + стиль под сайт */
  .ya-form-wrap iframe {
    width: 100%;
    min-height: 760px;          /* для длинных форм */
    height: 85vh;               /* адаптивно к высоте экрана */
    border: 1px solid #e8e8f0;
    border-radius: 16px;
    box-shadow: 0 8px 26px rgba(20,20,43,0.06);
    background: #fff;
  }

  /* На мобильных — чуть меньше минимальной высоты */
  @media (max-width: 640px) {
    .ya-form-wrap {
      margin: 6px auto 28px;
      padding: 0 8px;
    }
    .ya-form-wrap iframe {
      min-height: 900px;
      height: 92vh;
      border-radius: 14px;
    }
  }
</style>
