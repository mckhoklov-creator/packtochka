
# ПакТочка — статический магазин на GitHub Pages

- Jekyll (GH Pages)
- Каталог, карточки товаров, корзина (localStorage)
- Оформление заказа без онлайн-оплаты (Formspree / почта)

## Быстрый старт
1. Создайте репозиторий и загрузите файлы.
2. Включите GitHub Pages: Settings → Pages → Deploy from branch → `main` → `/ (root)`.
3. В `order.md` замените `action="https://formspree.io/f/XXXXXXXX"` на ваш Formspree endpoint.
4. Замените контактные данные в `contacts.md` и `index.md`.
5. Добавляйте товары в `_products/*.md` или `_data/products.yml`.

## Добавление товара
Создайте файл в `_products/имя.md` со следующим frontmatter:

```
---
name: "Коробка 20×20×20 см"
sku: "K-20x20x20-T23B"
price: 18
unit: "руб/шт при партии 100 шт"
min_qty: 100
category: "korobki"
slug: "korobka-20x20x20-t23b"
short: "Описание товара..."
specs:
  - "Материал: Т23Б"
images:
  - "/assets/img/korobka-20-20-20.jpg"
---
```

## Микроразметка
- Organization (на всех страницах)
- Product (на карточке товара)

## Корзина
- JS `assets/js/cart.js` хранит товары в `localStorage`.
- Страницы: `/cart/` и `/order/`.

## Поисковая индексация
- `jekyll-sitemap` создаёт sitemap.xml
- `robots.txt` открыт для индексации
- Уникальные title/description на страницах
