---
layout: default
title: "Самоклеящиеся этикетки — печать и поставка | ПакТочка Екатеринбург"
description: "Термотрансферные и термоэтикетки для маркировки, печать по вашим размерам. Оптом и в розницу, доставка по России."
permalink: /katalog/etiketki/
---

<h1>Этикетки</h1>

<div class="grid">
  {% assign items = site.data.products | where: "category", "etiketki" %}
  {% for p in items %}
  <div class="card">
    <a href="{{ '/katalog/etiketki/' | append: p.slug | append: '/' | relative_url }}">
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

<p class="mt-4">Категория находится в наполнении. Оставьте заявку, и мы предложим самоклеящиеся этикетки нужного формата, материала и способа печати.</p>

<section class="seo-text">
  <p><strong>Самоклеящиеся этикетки</strong> нужны для маркировки товаров, коробок, паллет и документов. Печать возможна на термоленте и термотрансферной бумаге, а также на синтетических материалах, стойких к влаге.</p>
  <p>Мы работаем с готовыми форматами и изготовлением по индивидуальным размерам, наносим фирменную печать, подбираем клеевой слой под условия эксплуатации.</p>
  <p>Этикетки подходят для магазинов, складов, маркетплейсов, логистики и производства. Возможен самовывоз в Екатеринбурге и отправка транспортными компаниями.</p>
</section>

<style>
  .seo-text { margin-top:32px; max-width:960px; color:#555; font-size:14px; line-height:1.6; }
  .seo-text p { margin:0 0 10px; }
</style>
