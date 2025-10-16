import React, { useMemo, useState } from "react";

/**
 * ПОРТФОЛИО ПЕДАГОГА — одностраничный сайт
 * -------------------------------------------------------
 * Как пользоваться:
 * 1) Замените данные в объекте `profile` и массивах `achievements`, `assets`, `documents` ниже.
 * 2) Для фото педагога укажите ссылку в `profile.photoUrl` (png/jpg/webp).
 * 3) Для медиа/документов используйте общедоступные ссылки (Google Drive/Dropbox/YouTube и др.).
 * 4) Нажмите «Экспорт» (или скачайте HTML сборку из UI), чтобы опубликовать на хостинге.
 *
 * Деплой за 5 минут:
 * — Github Pages / Netlify / Vercel: загрузите один файл build (если экспортируете) или подключите репо.
 * — Имя домена: подключите A/AAAA/CNAME к выбранному хостингу.
 */

// ====== ДАННЫЕ (ЗАМЕНИТЕ НА СВОИ) ======
const profile = {
  name: "Исагалиева Зульфия Асхатқызы",
  title: "Преподаватель ИТ / Методист",
  location: "Казахстан, Маңғыстау",
  email: "zulfiya@example.com",
  phone: "+7 700 000 00 00",
  photoUrl:
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop", // замените на фото педагога
  about:
    "Педагог с 10+ летним опытом. Готовлю студентов к WorldSkills/TurkicSkills, разрабатываю учебные программы по C#, SQL, ИИ и цифровой грамотности. Интересы: EdTech, генеративный ИИ, цифровая трансформация колледжа.",
  tags: ["ИТ-педагог", "Методист", "WorldSkills", "EdTech", "AI"]
};

// Достижения — таймлайн
const achievements = [
  {
    year: 2025,
    title: "Главный эксперт регионального чемпионата ITSSB",
    description:
      "Организация площадки, разработка и валидация ведомостей оценки, обучение экспертов.",
    links: [{ label: "Отчёт (PDF)", url: "#" }]
  },
  {
    year: 2024,
    title: "Победа студента в компетенции IT Solutions for Business",
    description: "1 место в области, проект — CRM для колледжа (C# + SQL).",
    links: [{ label: "Видео проекта", url: "#" }]
  },
  {
    year: 2023,
    title: "Сертификат педагога-исследователя",
    description: "Разработка методики смешанного обучения (SAMR + LLM инструменты).",
    links: []
  }
];

// Медиа/Проекты (картинки/видео/ссылки)
const assets = [
  {
    id: 1,
    category: "Медиа",
    title: "Видеоурок: Основы SQL",
    description: "15 минут, SELECT/JOIN/GROUP BY.",
    thumb:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600&auto=format&fit=crop",
    url: "https://www.youtube.com/",
    meta: ["Видео", "Учебные материалы"]
  },
  {
    id: 2,
    category: "Проекты",
    title: "Мобильное приложение для библиотеки",
    description: "React Native + Firebase. Учёт книг и выдача.",
    thumb:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    url: "#",
    meta: ["Кейс", "Студенческий проект"]
  },
  {
    id: 3,
    category: "Медиа",
    title: "Фоторепортаж: Хакатон колледжа",
    description: "Организация и менторство 12 команд.",
    thumb:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    url: "#",
    meta: ["Фото", "Событие"]
  }
];

// Документы (методички/программы/приказы/сертификаты)
const documents = [
  {
    id: 101,
    title: "Рабочая программа: " + "\"Жасанды интеллект негіздері\" (36 сағ)",
    type: "Методический материал",
    url: "#"
  },
  { id: 102, title: "Силлабус C#/.NET (2025)", type: "Силлабус", url: "#" },
  { id: 103, title: "Сертификат: Педагог-исследователь", type: "Сертификат", url: "#" }
];

const categories = ["Все", "Медиа", "Проекты"];

function Badge({ children }) {
  return (
    <span className="px-2 py-0.5 rounded-full text-xs bg-gray-100 border border-gray-200">{children}</span>
  );
}

function Section({ id, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          {description && (
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          )}
        </div>
        <a href="#top" className="text-sm text-blue-600 hover:underline">Наверх ↑</a>
      </div>
      {children}
    </section>
  );
}

export default function TeacherPortfolio() {
  const [tab, setTab] = useState("Все");
  const [query, setQuery] = useState("");

  const filteredAssets = useMemo(() => {
    return assets.filter((a) => {
      const byCat = tab === "Все" || a.category === tab;
      const q = query.trim().toLowerCase();
      const byQuery = !q ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.meta.join(" ").toLowerCase().includes(q);
      return byCat && byQuery;
    });
  }, [tab, query]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Шапка */}
      <header id="top" className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-12 h-12 rounded-full object-cover border"
            />
            <div>
              <h1 className="text-lg font-semibold leading-tight">{profile.name}</h1>
              <p className="text-sm text-gray-600">
                {profile.title} · {profile.location}
              </p>
            </div>
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-5 text-sm">
            <a href="#about" className="hover:text-blue-600">О педагоге</a>
            <a href="#achievements" className="hover:text-blue-600">Достижения</a>
            <a href="#portfolio" className="hover:text-blue-600">Медиа & Проекты</a>
            <a href="#documents" className="hover:text-blue-600">Документы</a>
            <a href="#contacts" className="hover:text-blue-600">Контакты</a>
          </nav>
          <a
            href="#documents"
            className="ml-auto md:ml-0 text-sm px-3 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100"
          >
            Скачать/посмотреть документы
          </a>
        </div>
      </header>

      {/* Герой/О педагоге */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="p-5 border rounded-2xl shadow-sm">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-full h-56 object-cover rounded-xl border"
            />
            <h2 className="text-xl font-semibold mt-4">{profile.name}</h2>
            <p className="text-sm text-gray-600">{profile.title}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {profile.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="mt-4 space-y-1 text-sm">
              <p>📍 {profile.location}</p>
              <p>✉️ <a className="text-blue-600 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p>☎️ <a className="text-blue-600 hover:underline" href={`tel:${profile.phone}`}>{profile.phone}</a></p>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#documents" className="px-3 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100 text-sm">Портфолио PDF</a>
              <a href="#contacts" className="px-3 py-2 rounded-xl border text-sm">Связаться</a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <Section id="about" title="О педагоге" description="Краткое профи-резюме и специализация">
            <p className="text-[15px] leading-relaxed">
              {profile.about}
            </p>
          </Section>

          <Section id="achievements" title="Достижения" description="Таймлайн ключевых результатов и наград">
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
              <ol className="space-y-6">
                {achievements.map((a, idx) => (
                  <li key={idx} className="pl-10 relative">
                    <span className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border flex items-center justify-center text-xs font-semibold">
                      {a.year.toString().slice(-2)}
                    </span>
                    <div className="p-4 border rounded-xl hover:shadow-sm transition">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{a.title}</h3>
                        <Badge>{a.year}</Badge>
                      </div>
                      <p className="text-sm text-gray-700 mt-1">{a.description}</p>
                      {a.links?.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {a.links.map((l, i) => (
                            <a key={i} className="text-sm text-blue-600 hover:underline" href={l.url} target="_blank" rel="noreferrer">
                              {l.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Section>

          <Section id="portfolio" title="Медиа и проекты" description="Категории, поиск и карточки работ">
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
              <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setTab(c)}
                    className={`px-3 py-1.5 rounded-full text-sm border ${
                      tab === c ? "bg-blue-600 text-white border-blue-600" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по проектам и медиа..."
                className="w-full md:w-72 px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-600/30"
              />
            </div>

            {filteredAssets.length === 0 ? (
              <p className="text-sm text-gray-600">Ничего не найдено. Попробуйте другую категорию или запрос.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAssets.map((a) => (
                  <a key={a.id} href={a.url} target="_blank" rel="noreferrer" className="group">
                    <div className="border rounded-2xl overflow-hidden hover:shadow-md transition">
                      <div className="h-40 overflow-hidden">
                        <img src={a.thumb} alt={a.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
                      </div>
                      <div className="p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium line-clamp-1">{a.title}</h4>
                          <Badge>{a.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{a.description}</p>
                        <div className="mt-2 flex gap-1 flex-wrap">
                          {a.meta.map((m) => (
                            <Badge key={m}>{m}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </Section>

          <Section id="documents" title="Документы" description="Методички, приказы, сертификаты, силлабусы — с быстрыми ссылками">
            <div className="grid sm:grid-cols-2 gap-3">
              {documents.map((d) => (
                <a key={d.id} href={d.url} className="p-4 border rounded-xl hover:shadow-sm transition flex items-start gap-3" target="_blank" rel="noreferrer">
                  <div className="w-10 h-10 rounded-lg border flex items-center justify-center text-sm">PDF</div>
                  <div>
                    <h4 className="font-medium leading-snug">{d.title}</h4>
                    <p className="text-sm text-gray-600">{d.type}</p>
                  </div>
                </a>
              ))}
            </div>
          </Section>

          <Section id="contacts" title="Контакты" description="Как связаться и где найти педагога в сети">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-xl">
                <h4 className="font-semibold">Обратная связь</h4>
                <p className="text-sm text-gray-600 mt-1">Свяжитесь по e‑mail или телефону, либо оставьте сообщение в мессенджере.</p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>✉️ <a className="text-blue-600 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
                  <li>☎️ <a className="text-blue-600 hover:underline" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
                </ul>
              </div>
              <div className="p-4 border rounded-xl">
                <h4 className="font-semibold">Соцсети / Площадки</h4>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>LinkedIn — <a className="text-blue-600 hover:underline" href="#">профиль</a></li>
                  <li>GitHub — <a className="text-blue-600 hover:underline" href="#">репозитории</a></li>
                  <li>YouTube — <a className="text-blue-600 hover:underline" href="#">канал</a></li>
                </ul>
              </div>
            </div>
          </Section>
        </div>
      </main>

      {/* Футер */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} {profile.name}. Портфолио педагога.</p>
          <p>
            Сделано на <span className="font-medium">React + Tailwind</span>. Обновляйте данные прямо в одном файле.
          </p>
        </div>
      </footer>
    </div>
  );
}
