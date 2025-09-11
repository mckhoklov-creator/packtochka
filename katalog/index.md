---
layout: default
title: "Каталог упаковочных материалов"
description: "Каталог: коробки, пакеты, скотч, пленка. Цены, наличие, минимальные партии."
permalink: /katalog/
---

<h1>Каталог</h1>

<nav class="cats" style="grid-template-columns:repeat(5,1fr);gap:12px;margin:12px 0 20px 0">
  <a class="cat" href="{{ site.baseurl }}/katalog/korobki/"><div class="cat__img"></div><div class="cat__cap">Коробки</div></a>
  <a class="cat" href="{{ site.baseurl }}/katalog/pakety/"><div class="cat__img"></div><div class="cat__cap">Пакеты курьерские</div></a>
  <a class="cat" href="{{ site.baseurl }}/katalog/skotch/"><div class="cat__img"></div><div class="cat__cap">Скотч</div></a>
  <a class="cat" href="{{ site.baseurl }}/katalog/plenka/"><div class="cat__img"></div><div class="cat__cap">Стрейч‑пленка</div></a>
  <a class="cat" href="{{ site.baseurl }}/katalog/prochie/"><div class="cat__img"></div><div class="cat__cap">Прочее</div></a>
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
