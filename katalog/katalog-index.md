---
layout: default
title: "Каталог упаковочных материалов"
description: "Каталог: коробки, пакеты, скотч, пленка. Цены, наличие, минимальные партии."
permalink: /katalog/
---

<h1>Каталог</h1>

<!-- Простой список ссылок без градиентных карточек -->
<nav class="cat-links">
  <a href="{{ site.baseurl }}/katalog/korobki/">Коробки</a>
  <a href="{{ site.baseurl }}/katalog/pakety/">Пакеты</a>
  <a href="{{ site.baseurl }}/katalog/skotch/">Скотч</a>
  <a href="{{ site.baseurl }}/katalog/plenka/">Стрейч‑пленка</a>
  <a href="{{ site.baseurl }}/katalog/prochie/">Прочее</a>
</nav>

<style>
  .cat-links{ display:flex; gap:18px; flex-wrap:wrap; margin:12px 0 22px; }
  .cat-links a{ color:#000; text-decoration:none; }
  .cat-links a:hover{ filter:brightness(0.9); }
</style>

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
