---
layout: default
title: "Гофрорулоны для упаковки — купить рулонами | ПакТочка Екатеринбург"
description: "Гофрокартон в рулонах для упаковки, защиты мебели и техники. Продажа от 1 рулона, самовывоз в Екатеринбурге и доставка по РФ."
permalink: /katalog/gofrorulony/
---

<h1>Гофрорулоны</h1>

{% assign items = site.data.products | where: "category", "gofrorulony" %}
{% if items.size > 0 %}
<div class="grid">
  {% for p in items %}
  <div class="card">
    <a href="{{ '/katalog/gofrorulony/' | append: p.slug | append: '/' | relative_url }}">
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
<p>Товары этой категории временно отсутствуют. Свяжитесь с нами, чтобы заказать гофрорулоны нужного размера и плотности.</p>
{% endif %}

<section class="seo-text">
  <p><strong>Гофрорулоны</strong> используют для упаковки мебели, техники, дверей и других крупногабаритных товаров. Материал защищает от сколов и царапин, позволяет фиксировать продукцию при перевозке.</p>
  <p>Двухслойный гофрокартон легко режется и принимает форму изделия. Его применяют на складах, производствах, в интернет-магазинах и транспортных компаниях.</p>
  <p>Поставляем гофрорулоны партиями от одного рулона, помогаем подобрать формат и оперативно доставляем заказы по Екатеринбургу и России.</p>
</section>

<style>
  .seo-text { margin-top:32px; max-width:960px; color:#555; font-size:14px; line-height:1.6; }
  .seo-text p { margin:0 0 10px; }
</style>
