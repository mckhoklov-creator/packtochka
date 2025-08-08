
---
layout: default
title: "Коробки — каталог"
description: "Коробки — цены и наличие."
permalink: /katalog/korobki/
---

<h1>Коробки</h1>

<div class="grid">
{% assign items = site.data.products | where: "category", "korobki" %}
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
