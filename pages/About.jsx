import Section from '../components/Section.jsx'
import { profile } from '../data/profile.js'
import { useTranslation } from 'react-i18next'

export default function About(){
  const { t } = useTranslation()
  return (
    <Section title={t('aboutTitle')} subtitle={t('aboutSub')}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img src={profile.photoUrl} className="w-full h-64 object-cover rounded-2xl border"/>
          <div className="mt-3 text-sm space-y-1">
            <p>📍 {profile.location}</p>
            <p>✉️ <a className="text-blue-600" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <p>☎️ <a className="text-blue-600" href={`tel:${profile.phone}`}>{profile.phone}</a></p>
          </div>
        </div>
        <div className="md:col-span-2 space-y-4">
          <p>Опыт: 10+ лет преподавания ИТ-дисциплин. Ментор чемпионатов WorldSkills/TurkicSkills. Организатор хакатонов, автор учебных программ.</p>
          <p>Педагогическая миссия: развивать у студентов критическое мышление, цифровую культуру и инженерное мышление.</p>
          <p>Интересы: EdTech, генеративный ИИ, автоматизация учебного процесса, цифровая трансформация колледжа.</p>
        </div>
      </div>
    </Section>
  )
}
