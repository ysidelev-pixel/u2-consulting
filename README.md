# Ю2 Консалтинг

Одностраничный лендинг GR-агентства для технологических компаний. Русское название — «Ю2 Консалтинг», исходная идея — U2. Графитовый фон, лаймовый акцент, адаптивная вёрстка. HTML, CSS и JavaScript без сборки, внешних шрифтов и платных сервисов.

## Просмотр

Откройте `index.html` в браузере. Для локального предпросмотра также можно выполнить из этой папки:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Затем откройте `http://127.0.0.1:8765/`.

## Контакты

`hello@u2-consulting.example` — придуманный адрес для макета. Он не является действующей почтой, не содержит ссылки для отправки письма и не используется формой.

Чтобы включить реальные контакты, измените `contact-config.js`:

```js
window.U2_CONTACT = Object.freeze({
  email: "ваш-реальный-адрес@ваш-домен.ru",
  telegram: "https://t.me/ваш_username",
  exampleEmail: ""
});
```

Укажите действующие значения вместо примеров. При заполненном `email` форма откроет подготовленное письмо в почтовой программе пользователя; отправить его нужно вручную. Если реальной почты нет, форма скачивает текст обращения. Передача на сервер и хранение персональных данных не реализованы. Сайт не сообщает о доставке обращения.

## Бесплатное размещение на GitHub Pages

1. Создайте в своём GitHub публичный репозиторий `u2-consulting`.
2. Загрузите **содержимое** этой папки в корень репозитория: `index.html`, `styles.css`, `script.js`, `contact-config.js`, `.nojekyll` и `architecture.webp`. `index.html` должен быть в корне, а не внутри дополнительной папки.
3. В **Settings → Pages → Build and deployment** выберите **Deploy from a branch**, ветку **main**, папку **/(root)**. Нажмите **Save**.
4. Дождитесь завершения публикации. Адрес проекта будет `https://ВАШ-ЛОГИН.github.io/u2-consulting/`.

Относительные пути рассчитаны и на адрес проекта, и на отдельный домен. Собственный домен не требуется. Для бесплатного GitHub Pages репозиторий должен быть публичным.

Официальные инструкции: [о GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [создание сайта](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Содержание

- Взаимодействие с федеральными и региональными органами власти.
- Сопровождение регуляторных вопросов, работа с законами и подзаконными актами.
- Подготовка деловых встреч, совещаний, форумов, выставок и выступлений.
- Опыт руководства в структурах государственной власти — по описанию заказчика.

Не добавлены придуманные сотрудники, биографии, клиенты, кейсы, статистика или гарантии встреч с конкретными должностными лицами. Для контактного блока использован условный адрес по просьбе заказчика.

## Изображение

`architecture.webp` — оригинальное изображение вымышленной архитектуры, созданное встроенным ImageGen. Оно не изображает конкретное ведомство или здание. Для сайта преобразовано в WebP; размер 1400 × 933.

Финальный промпт:

```text
Use case: photorealistic-natural
Asset type: standalone right-side hero image for a dark graphite Russian Government Relations consultancy landing page, with room for cropping.
Primary request: premium monochrome architectural editorial photograph of a monumental contemporary office or institutional facade in charcoal concrete and brushed dark steel.
Subject: symmetrical repeating vertical structural fins framing a clean passage or atrium; a few illuminated window reflections.
Style/medium: photorealistic generic invented architecture, premium editorial architectural photography.
Composition/framing: low-angle architectural view, quiet precise geometry, 3:2 landscape composition, ideally 1536x1024 pixels.
Lighting/mood: deep charcoal shadows, soft silver highlights, subtle atmospheric dusk.
Color palette: monochrome graphite, charcoal, dark steel, silver.
Constraints: no identifiable landmarks, no people, no text, no logo, no flags or national symbols, no neon, no sci-fi.
```
