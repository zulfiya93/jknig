import Section from '../components/Section.jsx'
import { students } from '../data/students.js'
import { useTranslation } from 'react-i18next'

export default function Students(){
  const { t } = useTranslation()
  return (
    <Section title={t('studentsTitle')} subtitle={t('studentsSub')}>
      <div className="grid md:grid-cols-2 gap-4">
        {students.map((s, i)=> (
          <div key={i} className="p-4 border rounded-2xl">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{s.name}</h4>
              <span className="badge">{s.year}</span>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{s.result}</p>
            {s.proof && <a className="text-sm text-blue-600 hover:underline mt-2 inline-block" href={s.proof} target="_blank" rel="noreferrer">Подтверждение</a>}
          </div>
        ))}
      </div>
    </Section>
  )
}
