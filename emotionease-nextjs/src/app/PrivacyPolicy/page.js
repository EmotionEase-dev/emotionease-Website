import Navbar from '../components/Navbar'
import PrivacyPolicy from '../components/PrivacyPolicy'
 
export const metadata = {
  title: 'Privacy Policy - EmotionEase',
  description: 'EmotionEase privacy policy and data protection information',
  keywords: 'privacy policy, terms and conditions, data protection, EmotionEase',
}
 
export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
    </>
  )
}


