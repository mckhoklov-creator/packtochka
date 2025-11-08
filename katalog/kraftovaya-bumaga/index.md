---
layout: default
title: "Крафтовая бумага в рулонах — купить для упаковки | ПакТочка Екатеринбург"
description: "Крафт-бумага бурого цвета для упаковки и прокладок. Продажа рулонами в Екатеринбурге, доставка по России."
permalink: /katalog/kraftovaya-bumaga/
---

<h1>Крафтовая бумага</h1>

{% assign items = site.data.products | where: "category", "kraftovaya-bumaga" %}
{% if items.size > 0 %}
<div class="grid">
  {% for p in items %}
  <div class="card">
    <a href="{{ '/katalog/kraftovaya-bumaga/' | append: p.slug | append: '/' | relative_url }}">
      <img src="{{ p.images | first | relative_url }}" alt="{{ p.name }}">
      <h3>{{ p.name }}</h3>
    </a>
    <p class="price">{{ p.price }} {{ p.unit }}</p>
    <p class="short">{{ p.short }}</p>
    <button class="btn btn-gradient mt-2 add-to-cart"
            data-sku="{{ p.slug }}"
            data-name="{{ p.name }}"
            data-price="{{ p.price }}">
      В корзину
    </button>
  </div>
  {% endfor %}
</div>
{% else %}
<p>Мы готовим ассортимент крафтовой бумаги. Оставьте заявку — менеджер подберёт нужную плотность и ширину рулона.</p>
{% endif %}

<section class="seo-text">
  <p><strong>Крафт-бумага</strong> — универсальный упаковочный материал натурального цвета. Она хорошо защищает поверхность товара, подходит для обёртки, прокладок и заполнения пустот в коробках.</p>
  <p>Бумага поставляется рулонами, удобно отматывается и экономно расходуется. Её используют интернет-магазины, службы доставки, склады и производственные компании.</p>
  <p>Поставляем крафтовую бумагу оптом и в розницу, предлагаем доставку по Екатеринбургу и отправку транспортными компаниями по России.</p>
</section>

<style>
  .seo-text { margin-top:32px; max-width:960px; color:#555; font-size:14px; line-height:1.6; }
  .seo-text p { margin:0 0 10px; }
</style>
