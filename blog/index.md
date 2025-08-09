---
layout: default
title: "Блог"
description: "Статьи об упаковке, логистике и оптимизации затрат."
permalink: /blog/
---

<h1>Блог</h1>
<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%d.%m.%Y" }}</small>
  </li>
{% endfor %}
</ul>
