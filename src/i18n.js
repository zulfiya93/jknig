import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  ru: {
    translation: {
      header: { subtitle: 'Портфолио педагога' },
      nav: { home:'Главная', about:'Обо мне', achievements:'Достижения', students:'Достижения студентов', projects:'Разработки', documents:'Документы', media:'Медиа', publications:'Публикации', reviews:'Отзывы', grants:'Гранты', press:'Пресса', contacts:'Контакты' },
      theme: { light: 'Светлая', dark: 'Тёмная' },
      footer: { rights: 'Все права защищены.', tech: 'React + Tailwind. Данные в /src/data/*' },
      home: { welcome:'Добро пожаловать', subtitle:'Портфолио педагога — результаты, разработки, достижения', btnAchievements:'Достижения', btnProjects:'Разработки', btnDocuments:'Документы' },
      contacts: { title:'Контакты', subtitle:'Связаться со мной', details:'Контактные данные', formTitle:'Форма обратной связи', name:'Ваше имя', email:'Ваш email', message:'Сообщение', send:'Отправить', sent:'Сообщение отправлено!', error:'Ошибка отправки. Попробуйте ещё раз.', privacy:'Отправляя форму, вы соглашаетесь с обработкой персональных данных.' },
      publicationsTitle:'Публикации', publicationsSub:'Статьи, методические материалы в изданиях',
      reviewsTitle:'Отзывы', reviewsSub:'Коллеги, студенты, партнёры',
      grantsTitle:'Гранты', grantsSub:'Выигранные гранты и проекты',
      pressTitle:'Пресса', pressSub:'СМИ о педагоге и студентах',
      mediaTitle:'Медиа', mediaSub:'Фото и видео материалы',
      docsTitle:'Документы', docsSub:'Методички, сертификаты, публикации — быстрые ссылки',
      projectsTitle:'Разработки и методические материалы', projectsSub:'Фильтры и поиск по работам',
      aboutTitle:'Обо мне', aboutSub:'Биография, опыт, миссия',
      achTitle:'Достижения', achSub:'Таймлайн результатов и наград',
      studentsTitle:'Достижения студентов', studentsSub:'Конкурсы, проекты, победы'
    }
  },
  kz: {
    translation: {
      header: { subtitle: 'Педагог портфолиосы' },
      nav: { home:'Басты бет', about:'Мен туралы', achievements:'Жетістіктер', students:'Студент жетістіктері', projects:'Жобалар', documents:'Құжаттар', media:'Медиа', publications:'Публикациялар', reviews:'Пікірлер', grants:'Гранттар', press:'БАҚ', contacts:'Байланыс' },
      theme: { light: 'Жарық', dark: 'Қараңғы' },
      footer: { rights: 'Барлық құқықтар қорғалған.', tech: 'React + Tailwind. Деректер /src/data/*' },
      home: { welcome:'Қош келдіңіз', subtitle:'Педагог портфолиосы — нәтижелер, жобалар, жетістіктер', btnAchievements:'Жетістіктер', btnProjects:'Жобалар', btnDocuments:'Құжаттар' },
      contacts: { title:'Байланыс', subtitle:'Менмен байланысу', details:'Байланыс деректері', formTitle:'Кері байланыс формасы', name:'Атыңыз', email:'Эл. пошта', message:'Хабарлама', send:'Жіберу', sent:'Хабарлама жіберілді!', error:'Жіберу қатесі. Қайта көріңіз.', privacy:'Форманы жіберу арқылы дербес деректерді өңдеуге келісесіз.' },
      publicationsTitle:'Публикациялар', publicationsSub:'Мақалалар мен әдістемелік материалдар',
      reviewsTitle:'Пікірлер', reviewsSub:'Әріптестер, студенттер, серіктестер',
      grantsTitle:'Гранттар', grantsSub:'Жеңіп алынған гранттар',
      pressTitle:'БАҚ', pressSub:'СМИ материалдары',
      mediaTitle:'Медиа', mediaSub:'Фото және видео',
      docsTitle:'Құжаттар', docsSub:'Әдістемелік материалдар, сертификаттар, жарияланымдар',
      projectsTitle:'Жобалар мен әдістемелік материалдар', projectsSub:'Іздеу және сүзгілер',
      aboutTitle:'Мен туралы', aboutSub:'Өмірбаян, тәжірибе, миссия',
      achTitle:'Жетістіктер', achSub:'Нәтижелер мен марапаттар',
      studentsTitle:'Студент жетістіктері', studentsSub:'Байқаулар, жобалар, жеңістер'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: { escapeValue: false }
})

export default i18n
