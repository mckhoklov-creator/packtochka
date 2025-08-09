---
layout: default
title: "Прочее"
permalink: /katalog/prochie/
---

<h1>Прочее</h1>
<p><a href="{{ site.baseurl }}/katalog/">← Вернуться в каталог</a></p>

<div class="grid">
{% assign items = site.data.products | where: "category", "prochie" %}
{% for p in items %}
  <div class="card">
    <a href="{{ site.baseurl }}/katalog/{{ p.category }}/{{ p.slug }}/">
      <img src="{{ site.baseurl }}{{ p.images | first }}" alt="{{ p.name }}">
      <h3>{{ p.name }}</h3>
    </a>
    <p class="price">{{ p.price }} {{ p.unit }}</p>
    <p class="short">{{ p.short }}</p>
    <button class="btn btn-gradient mt-2 add-to-cart" data-sku="{{ p.sku }}" data-name="{{ p.name }}" data-price="{{ p.price }}">В корзину</button>
  </div>
{% endfor %}
</div>
