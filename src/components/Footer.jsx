import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile.js'

export default function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container py-6 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {profile.name}. {t('footer.rights')}</p>
        <p>{t('footer.tech')}</p>
      </div>
    </footer>
  )
}
