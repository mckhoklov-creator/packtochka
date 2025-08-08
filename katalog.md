
---
layout: default
title: "Каталог упаковочных материалов"
description: "Каталог: коробки, пакеты, скотч, пленка. Цены, наличие, минимальные партии."
permalink: /katalog/
---

<h1>Каталог</h1>

<nav class="cats">
  <a href="/katalog/korobki/">Коробки</a>
  <a href="/katalog/pakety/">Пакеты</a>
  <a href="/katalog/skotch/">Скотч</a>
  <a href="/katalog/plenka/">Пленка</a>
  <a href="/katalog/prochie/">Прочее</a>
</nav>

<div class="grid">
{% assign items = site.data.products %}
{% for p in items %}
  <div class="card">
    <a href="/katalog/{{ p.category }}/{{ p.slug }}/">
      <img src="{{ p.images | first }}" alt="{{ p.name }}">
      <h3>{{ p.name }}</h3>
    </a>
    <p class="price">{{ p.price }} {{ p.unit }}</p>
    <p class="short">{{ p.short }}</p>
    <button class="add-to-cart" data-sku="{{ p.sku }}" data-name="{{ p.name }}" data-price="{{ p.price }}">В корзину</button>
  </div>
{% endfor %}
</div>
