---
layout: default
title: "Пакеты"
permalink: /katalog/pakety/
---

<nav aria-label="breadcrumb" style="margin:10px 0; font-size:.95rem;">
  <a href="{{ site.baseurl }}/">Главная</a> ›
  <a href="{{ site.baseurl }}/katalog/">Каталог</a> ›
  <span aria-current="page">Пакеты</span>
</nav>

<h1>Пакеты</h1>
<p><a href="{{ site.baseurl }}/katalog/">← Вернуться в каталог</a></p>

<div class="grid">
{% assign items = site.data.products | where: "category", "pakety" %}
{% for p in items %}
  <div class="card">
    <a href="{{ site.baseurl }}/katalog/{{ p.category }}/{{ p.slug }}/">
      <img src="{{ site.baseurl }}{{ p.images | first }}" alt="{{ p.name }}">
      <h3>{{ p.name }}</h3>
    </a>
    <p class="price">{{ p.price }} {{ p.unit }}</p>
    <button class="btn btn-gradient mt-2 add-to-cart" data-sku="{{ p.sku }}" data-name="{{ p.name }}" data-price="{{ p.price }}">В корзину</button>
  </div>
{% endfor %}
</div>

<section class="mt-5">
  <h2>Частые вопросы</h2>
  <details><summary>Какая минимальная партия?</summary><p>Для большинства позиций — от 100 шт, для плёнки — от 6 рулонов, для скотча — от 36 рулонов. Уточняйте по конкретной модели.</p></details>
  <details><summary>Делаете коробки под размер?</summary><p>Да, производим по размерам клиента. Отправьте параметры через форму на странице «Услуги».</p></details>
  <details><summary>Какие варианты доставки?</summary><p>Самовывоз в Екатеринбурге, доставка по городу и отправка ТК по РФ.</p></details>
  <details><summary>Можно оплатить по счёту?</summary><p>Да, работаем с ИП/ООО, выставляем счёт и предоставляем документы.</p></details>
</section>

