import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile.js'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function NavItem({ to, children }){
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 ${isActive ? 'bg-gray-100 dark:bg-gray-800 font-semibold' : ''}`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar(){
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(()=>{
    const root = document.documentElement
    if(theme==='dark'){ root.classList.add('dark') } else { root.classList.remove('dark') }
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="container py-3 flex items-center gap-4">
        <div className="flex items-center gap-3">
          <img src={profile.photoUrl} alt={profile.name} className="w-10 h-10 rounded-full object-cover border"/>
          <div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{t('header.subtitle')}</div>
            <h1 className="text-base font-semibold leading-tight">{profile.name}</h1>
          </div>
        </div>

        <nav className="ml-auto flex flex-wrap items-center gap-1">
          <NavItem to="/">{t('nav.home')}</NavItem>
          <NavItem to="/about">{t('nav.about')}</NavItem>
          <NavItem to="/achievements">{t('nav.achievements')}</NavItem>
          <NavItem to="/students">{t('nav.students')}</NavItem>
          <NavItem to="/projects">{t('nav.projects')}</NavItem>
          <NavItem to="/documents">{t('nav.documents')}</NavItem>
          <NavItem to="/media">{t('nav.media')}</NavItem>
          <NavItem to="/publications">{t('nav.publications')}</NavItem>
          <NavItem to="/reviews">{t('nav.reviews')}</NavItem>
          <NavItem to="/grants">{t('nav.grants')}</NavItem>
          <NavItem to="/press">{t('nav.press')}</NavItem>
          <NavItem to="/contacts">{t('nav.contacts')}</NavItem>
        </nav>

        <div className="flex items-center gap-2 ml-2">
          <select
            className="text-sm border rounded-xl px-2 py-1 bg-white dark:bg-gray-900"
            value={i18n.language}
            onChange={(e)=> i18n.changeLanguage(e.target.value)}
          >
            <option value="ru">RU</option>
            <option value="kz">KZ</option>
          </select>
          <button onClick={()=> setTheme(theme==='dark'?'light':'dark')} className="text-sm px-3 py-1.5 rounded-xl border">
            {theme==='dark' ? t('theme.light') : t('theme.dark')}
          </button>
        </div>
      </div>
    </header>
  )
}
