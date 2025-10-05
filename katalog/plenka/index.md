---
layout: default
title: "Стрейч-плёнка упаковочная — купить оптом и в розницу | ПакТочка Екатеринбург"
description: "Стрейч-плёнка прозрачная и чёрная для упаковки и транспортировки товаров. Купить упаковочную стрейч-плёнку оптом и в розницу в Екатеринбурге с доставкой по всей России."
permalink: /katalog/plenka/
---

<h1>Стрейч-плёнка упаковочная</h1>

<div class="grid">
  {% assign items = site.data.products | where: "category", "plenka" %}
  {% for p in items %}
  <div class="card">
    <a href="{{ '/katalog/plenka/' | append: p.slug | append: '/' | relative_url }}">
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

<!-- 🔹 SEO-текст -->
<section class="seo-text">
  <p><strong>ПакТочка</strong> предлагает прочную стрейч-плёнку для упаковки и защиты товаров при транспортировке и хранении. В наличии прозрачная и чёрная плёнка шириной 500 мм, плотностью 17–23 мкм, весом от 1,7 кг.</p>
  <p>Стрейч-плёнка плотно обтягивает коробки, паллеты и другие грузы, защищая их от влаги, пыли и повреждений. Используется для упаковки товаров в интернет-магазинах, на складах и производстве.</p>
  <p>Вы можете <strong>купить стрейч-плёнку оптом и в розницу в Екатеринбурге</strong> с доставкой по всей России. Доступен самовывоз со склада и быстрая доставка Яндексом по городу.</p>
</section>

<style>
  .seo-text { margin-top:32px; max-width:960px; color:#555; font-size:14px; line-height:1.6; }
  .seo-text p { margin:0 0 10px; }
</style>
