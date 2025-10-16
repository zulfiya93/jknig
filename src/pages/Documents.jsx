import Section from '../components/Section.jsx'
import { documents } from '../data/documents.js'
import { useTranslation } from 'react-i18next'

export default function Documents(){
  const { t } = useTranslation()
  return (
    <Section title={t('docsTitle')} subtitle={t('docsSub')}>
      <div className="grid sm:grid-cols-2 gap-3">
        {documents.map(d=> (
          <a key={d.id} href={d.url} target="_blank" rel="noreferrer" className="p-4 border rounded-xl hover:shadow-sm transition flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg border flex items-center justify-center text-sm">{d.type === 'Сертификат' ? 'CERT' : 'PDF'}</div>
            <div>
              <h4 className="font-medium leading-snug">{d.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{d.type}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
