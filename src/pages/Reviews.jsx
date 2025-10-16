import Section from '../components/Section.jsx'
import { reviews } from '../data/reviews.js'
import { useTranslation } from 'react-i18next'

export default function Reviews(){
  const { t } = useTranslation()
  return (
    <Section title={t('reviewsTitle')} subtitle={t('reviewsSub')}>
      <div className="grid md:grid-cols-2 gap-4">
        {reviews.map(r=> (
          <div key={r.id} className="p-4 border rounded-2xl">
            <p className="italic">“{r.text}”</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">— {r.author}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
