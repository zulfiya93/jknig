import Section from '../components/Section.jsx'
import { profile } from '../data/profile.js'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contacts(){
  const { t } = useTranslation()
  const [status, setStatus] = useState(null)

  const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID' // замените своим ID

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    try {
      const res = await fetch(FORM_ENDPOINT, { method:'POST', body: form, headers: { 'Accept':'application/json' } })
      if(res.ok){ setStatus('ok'); e.currentTarget.reset() } else { setStatus('error') }
    } catch(e){ setStatus('error') }
  }

  return (
    <Section title={t('contacts.title')} subtitle={t('contacts.subtitle')}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-xl">
          <h4 className="font-semibold">{t('contacts.details')}</h4>
          <ul className="mt-3 space-y-1 text-sm">
            <li>📍 {profile.location}</li>
            <li>✉️ <a className="text-blue-600 hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li>☎️ <a className="text-blue-600 hover:underline" href={`tel:${profile.phone}`}>{profile.phone}</a></li>
          </ul>
        </div>
        <div className="p-4 border rounded-xl">
          <h4 className="font-semibold">{t('contacts.formTitle')}</h4>
          <form onSubmit={handleSubmit} className="mt-3 space-y-3">
            <input name="name" required placeholder={t('contacts.name')} className="w-full px-3 py-2 rounded-xl border bg-white dark:bg-gray-900"/>
            <input type="email" name="email" required placeholder={t('contacts.email')} className="w-full px-3 py-2 rounded-xl border bg-white dark:bg-gray-900"/>
            <textarea name="message" required placeholder={t('contacts.message')} rows="4" className="w-full px-3 py-2 rounded-xl border bg-white dark:bg-gray-900"></textarea>
            <button className="btn btn-primary" type="submit">{t('contacts.send')}</button>
            {status==='ok' && <p className="text-green-600 text-sm">{t('contacts.sent')}</p>}
            {status==='error' && <p className="text-red-600 text-sm">{t('contacts.error')}</p>}
          </form>
          <p className="text-xs text-gray-500 mt-2">{t('contacts.privacy')}</p>
        </div>
      </div>
    </Section>
  )
}
