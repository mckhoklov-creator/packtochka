---
layout: default
title: "Каталог упаковочных материалов — коробки, пакеты, плёнка, скотч | ПакТочка Екатеринбург"
description: "Каталог упаковочных материалов ПакТочка: коробки, пакеты, скотч, стрейч-плёнка, гофрокартон и крафт-бумага. Купить упаковку оптом и в розницу в Екатеринбурге с доставкой по всей России."
permalink: /katalog/
---

<h1>Каталог упаковочных материалов</h1>

<nav class="cat-links">
  <a href="{{ '/katalog/korobki/' | relative_url }}">Коробки</a>
  <a href="{{ '/katalog/pakety/' | relative_url }}">Пакеты</a>
  <a href="{{ '/katalog/skotch/' | relative_url }}">Скотч</a>
  <a href="{{ '/katalog/plenka/' | relative_url }}">Стрейч-плёнка</a>
  <a href="{{ '/katalog/prochie/' | relative_url }}">Прочее</a>
</nav>

<div class="grid">
  {% assign items = site.data.products %}
  {% for p in items %}
  <div class="card">
    <a href="{{ '/katalog/' | append: p.category | append: '/' | append: p.slug | append: '/' | relative_url }}">
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

<!-- Аккуратный SEO-текст: мелкий шрифт, приглушённый цвет, после карточек -->
<section class="seo-text">
  <p><strong>ПакТочка</strong> — интернет-магазин упаковочных материалов в Екатеринбурге. В наличии гофрокороба, курьерские пакеты, стрейч-плёнка, крафт-бумага, скотч и гофрорулоны. Подходит для магазинов, маркетплейсов, складов и доставки.</p>
  <p>Можно купить упаковку оптом и в розницу, оформить самовывоз в Екатеринбурге, заказать доставку Яндексом по городу или отправку по всей России транспортными компаниями. Поможем подобрать размеры коробок и оптимизировать расходы на упаковку.</p>
</section>

<style>
  .cat-links { display:flex; gap:18px; flex-wrap:wrap; margin:12px 0 22px; }
  .cat-links a { color:#000; text-decoration:none; }
  .cat-links a:hover { filter:brightness(.9); }
  .seo-text { margin-top:32px; max-width:960px; color:#555; font-size:14px; line-height:1.6; }
  .seo-text p { margin:0 0 10px; }
</style>
