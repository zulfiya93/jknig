import Section from '../components/Section.jsx'
import { grants } from '../data/grants.js'
import { useTranslation } from 'react-i18next'

export default function Grants(){
  const { t } = useTranslation()
  return (
    <Section title={t('grantsTitle')} subtitle={t('grantsSub')}>
      <div className="space-y-3">
        {grants.map(g=> (
          <div key={g.id} className="p-4 border rounded-xl">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{g.title}</h4>
              <span className="badge">{g.year}</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{g.desc}</p>
            {g.link && <a className="text-sm text-blue-600 hover:underline mt-2 inline-block" href={g.link} target="_blank" rel="noreferrer">Подробнее</a>}
          </div>
        ))}
      </div>
    </Section>
  )
}
