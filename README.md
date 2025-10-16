# Teacher Portfolio

Портфолио преподавателя (Vite + React + Tailwind + React Router + i18n RU/KZ).  
Готово для автосборки и публикации на GitHub Pages через Actions.

## Быстрый старт
```bash
npm install
npm run dev
npm run build
```

## Публикация на GitHub Pages (Actions)
1) Убедитесь, что в `vite.config.js` указан `base: '/teacher-portfolio/'`.
2) Запушьте в `main`. Workflow `.github/workflows/gh-pages.yml` соберёт проект и опубликует на Pages.
3) Адрес: `https://<ВАШ_НИК>.github.io/teacher-portfolio/`

## Загрузка артефакта dist
Второй workflow (`build-artifact.yml`) создаёт артефакт со сборкой, который можно скачать из вкладки Actions.

## Настройки
- Язык: переключатель RU/KZ в шапке.
- Тёмная тема: тумблер в шапке (сохраняется в localStorage).
- Форма обратной связи: замените `YOUR_FORM_ID` в `src/pages/Contacts.jsx` на ID из Formspree.
