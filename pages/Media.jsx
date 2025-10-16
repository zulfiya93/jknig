import Section from '../components/Section.jsx'
import { media } from '../data/media.js'
import { useTranslation } from 'react-i18next'

export default function Media(){
  const { t } = useTranslation()
  return (
    <Section title={t('mediaTitle')} subtitle={t('mediaSub')}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {media.map(m=> (
          <a key={m.id} href={m.url} target="_blank" rel="noreferrer" className="group">
            <div className="border rounded-2xl overflow-hidden hover:shadow-md transition">
              <div className="h-40 overflow-hidden">
                <img src={m.thumb} alt={m.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition"/>
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium line-clamp-1">{m.title}</h4>
                  <span className="badge">{m.kind}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}
