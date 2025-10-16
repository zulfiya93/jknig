import Section from '../components/Section.jsx'
import { publications } from '../data/publications.js'
import { useTranslation } from 'react-i18next'

export default function Publications(){
  const { t } = useTranslation()
  return (
    <Section title={t('publicationsTitle')} subtitle={t('publicationsSub')}>
      <div className="space-y-3">
        {publications.map(p=> (
          <div key={p.id} className="p-4 border rounded-xl flex items-start justify-between gap-3">
            <div>
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.outlet} • {p.year}</p>
            </div>
            <a className="text-blue-600 hover:underline text-sm" href={p.link} target="_blank" rel="noreferrer">Ссылка</a>
          </div>
        ))}
      </div>
    </Section>
  )
}
