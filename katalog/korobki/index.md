---
layout: default
title: "Картонные коробки купить оптом в Екатеринбурге | ПакТочка"
description: "Картонные коробки бурого цвета из гофрокартона Т22, Т23 и Т24. Подходят для упаковки, хранения и отправки товаров. Купить оптом и в розницу в Екатеринбурге с доставкой по всей России."
permalink: /katalog/korobki/
---

<h1>Картонные коробки</h1>

<div class="grid">
  {% assign items = site.data.products | where: "category", "korobki" %}
  {% for p in items %}
  <div class="card">
    <a href="{{ '/katalog/korobki/' | append: p.slug | append: '/' | relative_url }}">
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
  <p><strong>ПакТочка</strong> предлагает картонные коробки бурого цвета из прочного гофрокартона Т22, Т23 и Т24. Коробки подходят для упаковки, хранения и отправки товаров в интернет-магазинах, на маркетплейсах и складах.</p>
  <p>Мы производим и поставляем <strong>гофрокороба различных размеров</strong>: от маленьких коробок 100×100×100 мм до крупных упаковочных коробок для бытовой техники и текстиля. Вся продукция изготовлена из экологичных материалов и подходит для повторного использования.</p>
  <p>Вы можете <strong>купить коробки оптом и в розницу в Екатеринбурге</strong> с доставкой по всей России. Самовывоз доступен со склада, возможна доставка Яндексом по городу и отправка транспортными компаниями.</p>
</section>

<style>
  .seo-text { margin-top:32px; max-width:960px; color:#555; font-size:14px; line-height:1.6; }
  .seo-text p { margin:0 0 10px; }
</style>

