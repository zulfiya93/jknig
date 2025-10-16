import Section from '../components/Section.jsx'
import { press } from '../data/press.js'
import { useTranslation } from 'react-i18next'

export default function Press(){
  const { t } = useTranslation()
  return (
    <Section title={t('pressTitle')} subtitle={t('pressSub')}>
      <div className="space-y-3">
        {press.map(p=> (
          <div key={p.id} className="p-4 border rounded-xl flex items-start justify-between gap-3">
            <div>
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{p.outlet}</p>
            </div>
            <a className="text-blue-600 hover:underline text-sm" href={p.link} target="_blank" rel="noreferrer">Ссылка</a>
          </div>
        ))}
      </div>
    </Section>
  )
}
