import Section from '../components/Section.jsx'
import { projects } from '../data/projects.js'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const categories = ['Все','Методички','Разработки']

export default function Projects(){
  const { t } = useTranslation()
  const [tab, setTab] = useState('Все')
  const [q, setQ] = useState('')

  const filtered = useMemo(()=>{
    return projects.filter(p=>{
      const byCat = tab==='Все' || p.cat===tab
      const qq = q.trim().toLowerCase()
      const byQuery = !qq || p.title.toLowerCase().includes(qq) || p.desc.toLowerCase().includes(qq)
      return byCat && byQuery
    })
  },[tab,q])

  return (
    <Section title={t('projectsTitle')} subtitle={t('projectsSub')}>
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-4">
        <div className="flex gap-2 flex-wrap">
          {categories.map(c=> (
            <button key={c} onClick={()=>setTab(c)} className={`px-3 py-1.5 rounded-full text-sm border ${tab===c? 'bg-blue-600 text-white border-blue-600':'bg-white dark:bg-gray-900 hover:bg-gray-50'}`}>{c}</button>
          ))}
        </div>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder={t('projectsSub')}
          className="w-full md:w-72 px-3 py-2 rounded-xl border bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600/30"/>
      </div>

      {filtered.length===0 ? (
        <p className="text-sm text-gray-600 dark:text-gray-400">Ничего не найдено.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(p=> (
            <a key={p.id} href={p.link} target="_blank" rel="noreferrer" className="group">
              <div className="border rounded-2xl overflow-hidden hover:shadow-md transition p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium line-clamp-1">{p.title}</h4>
                  <span className="badge">{p.cat}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  )
}
