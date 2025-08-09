---
layout: default
title: "Плёнка"
permalink: /katalog/plenka/
---

<nav aria-label="breadcrumb" style="margin:10px 0; font-size:.95rem;">
  <a href="{{ site.baseurl }}/">Главная</a> ›
  <a href="{{ site.baseurl }}/katalog/">Каталог</a> ›
  <span aria-current="page">Плёнка</span>
</nav>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Главная","item":"{{ site.url }}{{ site.baseurl }}/"},
    {"@type":"ListItem","position":2,"name":"Каталог","item":"{{ site.url }}{{ site.baseurl }}/katalog/"}, 
    {"@type":"ListItem","position":3,"name":"Плёнка","item":"{{ site.url }}{{ site.baseurl }}/katalog/plenka/"}
  ]
}
</script>

<h1>Плёнка</h1>
<p><a href="{{ site.baseurl }}/katalog/">← Вернуться в каталог</a></p>

<div class="grid">
{% assign items = site.data.products | where: "category", "plenka" %}
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
