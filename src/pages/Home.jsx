import Section from '../components/Section.jsx'
import { profile } from '../data/profile.js'
import { useTranslation } from 'react-i18next'

export default function Home(){
  const { t } = useTranslation()
  return (
    <Section title={t('home.welcome')} subtitle={t('home.subtitle')}>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <img src={profile.photoUrl} alt={profile.name} className="w-full h-72 object-cover rounded-2xl border"/>
        <div>
          <h3 className="text-xl font-semibold">{profile.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{profile.title} · {profile.location}</p>
          <p className="mt-3 leading-relaxed">{profile.about}</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {profile.tags.map(tg=> (<span className="badge" key={tg}>{tg}</span>))}
          </div>
          <div className="mt-4 flex gap-2">
            <a className="btn btn-primary" href="#/achievements">{t('home.btnAchievements')}</a>
            <a className="btn" href="#/projects">{t('home.btnProjects')}</a>
            <a className="btn" href="#/documents">{t('home.btnDocuments')}</a>
          </div>
        </div>
      </div>
    </Section>
  )
}
