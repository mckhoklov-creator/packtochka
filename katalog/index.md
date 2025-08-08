---
layout: default
title: "Каталог упаковочных материалов"
description: "Каталог: коробки, пакеты, скотч, пленка. Цены, наличие, минимальные партии."
---
<h1>Каталог</h1>
<nav class="cats mb-4">
  <a href="{{ site.baseurl }}/katalog/korobki/">Коробки</a>
  <a href="{{ site.baseurl }}/katalog/pakety/">Пакеты</a>
  <a href="{{ site.baseurl }}/katalog/skotch/">Скотч</a>
  <a href="{{ site.baseurl }}/katalog/plenka/">Пленка</a>
  <a href="{{ site.baseurl }}/katalog/prochie/">Прочее</a>
</nav>
<div class="grid">
{% assign items = site.data.products %}
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
