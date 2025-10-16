import Section from '../components/Section.jsx'
import { Timeline } from '../components/Timeline.jsx'
import { achievements } from '../data/achievements.js'
import { useTranslation } from 'react-i18next'

export default function Achievements(){
  const { t } = useTranslation()
  return (
    <Section title={t('achTitle')} subtitle={t('achSub')}>
      <Timeline items={achievements} />
    </Section>
  )
}
