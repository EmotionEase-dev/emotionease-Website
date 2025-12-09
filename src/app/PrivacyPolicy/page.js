import Navbar from '../components/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy - EmotionEase',
  description: 'EmotionEase privacy policy and data protection information',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
    </>
  )
}