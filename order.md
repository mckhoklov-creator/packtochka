---
layout: default
title: "Оформление заказа — упаковочные материалы | ПакТочка"
description: "Отправьте заявку на упаковочные материалы. Мы свяжемся с вами, уточним детали и выставим счёт."
permalink: /order/
---

<div class="order-header">
  <h1>Оформление заказа</h1>
  <p class="lead-muted">Заполните форму — менеджер свяжется с вами в ближайшее время.</p>
</div>

<!-- Невидимый iframe: в него уходит POST на Formcarry, чтобы не покидать страницу -->
<iframe name="fc_iframe" style="display:none;"></iframe>

<form action="https://formcarry.com/s/N7tSL3Gk8ZW" method="POST" class="formcarry-form" target="fc_iframe" novalidate>
  <label>Ваше имя *</label>
  <input type="text" name="name" placeholder="Введите ваше имя" required>

  <label>Телефон *</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="+7 (___) ___-__-__"
    inputmode="tel"
    autocomplete="tel"
    required>

  <label>Email *</label>
  <input type="email" name="email" placeholder="example@mail.ru" required>

  <fieldset class="status-group">
    <legend>Статус *</legend>
    <label><input type="radio" name="status" value="Физическое лицо" required> Физическое лицо</label>
    <label><input type="radio" name="status" value="ИП"> ИП</label>
    <label><input type="radio" name="status" value="ООО"> ООО</label>
  </fieldset>

  <label>Комментарий</label>
  <textarea name="comment" rows="4" placeholder="Удобное время звонка, детали заказа..."></textarea>

  <button type="submit">Отправить заявку</button>
</form>

<!-- Мягкая маска телефона + корректная работа Backspace/Delete и редирект после отправки -->
<script>
(function () {
  // ====== Маска телефона ======
  const input = document.getElementById('phone');
  if (input) {
    const onlyDigits = (s) => (s.match(/\d/g) || []).join('');
    const digitsCountIn = (s) => (s.match(/\d/g) || []).length;

    function normalizeDigits(d) {
      if (d.startsWith('8')) d = '7' + d.slice(1);
      if (!d.startsWith('7')) d = '7' + d;
      return d.slice(0, 11);
    }
    function formatByDigits(d) {
      if (!d) return '';
      let out = '+7';
      if (d.length > 1) out += ' (' + d.slice(1, 4);
      if (d.length >= 4) out += ')';
      if (d.length > 4) out += ' ' + d.slice(4, 7);
      if (d.length > 7) out += '-' + d.slice(7, 9);
      if (d.length > 9) out += '-' + d.slice(9, 11);
      return out;
    }
    function caretPosForDigitIndex(formatted, digitIndex) {
      if (digitIndex <= 0) {
        const idx7 = formatted.indexOf('7');
        return idx7 >= 0 ? idx7 + 1 : 0;
      }
      let cnt = 0;
      for (let i = 0; i < formatted.length; i++) {
        if (/\d/.test(formatted[i])) {
          cnt++;
          if (cnt === digitIndex) return i + 1;
        }
      }
      return formatted.length;
    }

    input.addEventListener('focus', () => {
      if (!onlyDigits(input.value)) {
        input.value = '+7 ';
        setTimeout(() => input.setSelectionRange(input.value.length, input.value.length), 0);
      }
    });

    input.addEventListener('input', () => {
      const sel = input.selectionStart || 0;
      const before = input.value.slice(0, sel);
      const digitIdx = digitsCountIn(before);
      let d = normalizeDigits(onlyDigits(input.value));
      const formatted = formatByDigits(d);
      input.value = formatted;
      const newPos = caretPosForDigitIndex(formatted, digitIdx);
      input.setSelectionRange(newPos, newPos);
    });

    input.addEventListener('keydown', (e) => {
      const key = e.key;
      if (key !== 'Backspace' && key !== 'Delete') return;

      const selStart = input.selectionStart || 0;
      const selEnd = input.selectionEnd || 0;
      let d = normalizeDigits(onlyDigits(input.value));
      let digitIdxLeft = digitsCountIn(input.value.slice(0, selStart));

      if (selEnd > selStart) {
        const leftDigits = digitsCountIn(input.value.slice(0, selStart));
        const rightDigits = digitsCountIn(input.value.slice(0, selEnd));
        let kept = '', idx = 0;
        for (let ch of d) {
          if (idx < leftDigits || idx >= rightDigits) kept += ch;
          idx++;
        }
        d = kept;
        const formatted = formatByDigits(d);
        input.value = formatted;
        const pos = caretPosForDigitIndex(formatted, leftDigits);
        input.setSelectionRange(pos, pos);
        e.preventDefault();
        return;
      }

      if (key === 'Backspace') {
        if (digitIdxLeft > 0) {
          let kept = '';
          for (let i = 0; i < d.length; i++) if (i !== digitIdxLeft - 1) kept += d[i];
          d = kept;
          const formatted = formatByDigits(d);
          input.value = formatted;
          const pos = caretPosForDigitIndex(formatted, digitIdxLeft - 1);
          input.setSelectionRange(pos, pos);
          e.preventDefault();
        } else {
          const formatted = formatByDigits(d);
          const pos = caretPosForDigitIndex(formatted, 1);
          input.setSelectionRange(pos, pos);
          e.preventDefault();
        }
      } else if (key === 'Delete') {
        if (digitIdxLeft < d.length) {
          let kept = '';
          for (let i = 0; i < d.length; i++) if (i !== digitIdxLeft) kept += d[i];
          d = kept;
          const formatted = formatByDigits(d);
          input.value = formatted;
          const pos = caretPosForDigitIndex(formatted, digitIdxLeft);
          input.setSelectionRange(pos, pos);
          e.preventDefault();
        }
      }
    });

    input.addEventListener('blur', () => {
      const d = onlyDigits(input.value);
      if (d.length < 11) input.value = '';
    });
  }

  // ====== Редирект на свою «Спасибо» после отправки (Free-план Formcarry) ======
  const form = document.querySelector('.formcarry-form');
  if (form) {
    form.addEventListener('submit', function () {
      // Дадим запросу уйти в скрытый iframe и аккуратно переведём пользователя
      setTimeout(function () {
        window.location.href = 'https://packtochka.ru/spasibo/';
      }, 600); // 0.6 сек обычно достаточно
    });
  }
})();
</script>

<style>
  .order-header { text-align: center; margin: 10px 0 25px; }
  .lead-muted { color: #6b7280; font-size: 15px; }

  .formcarry-form {
    max-width: 540px;
    margin: 0 auto 60px;
    padding: 24px 28px;
    background: #fff;
    border: 1px solid #e8e8f0;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(20,20,43,.06);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .formcarry-form label { font-weight: 600; font-size: 14px; color: #333; }
  .formcarry-form input,
  .formcarry-form textarea {
    padding: 10px 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    transition: border-color .2s, box-shadow .2s;
    width: 100%;
    box-sizing: border-box;
  }
  .formcarry-form input:focus,
  .formcarry-form textarea:focus {
    border-color: #7B61FF;
    box-shadow: 0 0 0 2px rgba(123,97,255,.15);
  }

  .status-group {
    border: none; margin-top: 8px; margin-bottom: 10px;
    display: flex; flex-direction: column; gap: 6px; padding: 0;
  }
  .status-group legend { font-weight: 600; margin-bottom: 4px; color: #333; font-size: 14px; }
  .status-group label { font-weight: 400; font-size: 14px; color: #333; display: flex; align-items: center; gap: 6px; }
  .status-group input[type="radio"] { accent-color: #7B61FF; width: 16px; height: 16px; }

  .formcarry-form button {
    margin-top: 10px; padding: 12px 16px; font-size: 16px; font-weight: 600; color: #fff;
    border: none; border-radius: 12px; cursor: pointer;
    background: linear-gradient(90deg, #7B61FF 0%, #6C8BFF 100%);
    box-shadow: 0 4px 20px rgba(123,97,255,.3);
    transition: opacity .2s;
  }
  .formcarry-form button:hover { opacity: 0.9; }

  @media (max-width: 640px) {
    .formcarry-form { margin: 0 10px 40px; padding: 20px; }
  }
</style>
