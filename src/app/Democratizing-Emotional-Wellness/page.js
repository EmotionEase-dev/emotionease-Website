import Navbar from '../components/Navbar'
import Image from 'next/image'

export const metadata = {
  title: 'Democratizing Emotional Wellness - EmotionEase',
  description: 'Making mental health care accessible to everyone',
  keywords: 'accessible mental health, emotional wellness, mental health equity, therapy access',
  openGraph: {
    title: 'Democratizing Emotional Wellness',
    description: 'Breaking barriers in mental health care accessibility',
    type: 'article',
    images: ['/assets/Democratizing Emotional Wellness.webp'],
  },
}

export default function BlogPost6() {
  return (
    <>
      <Navbar />
      <main>
        {/* Copy content from temp-pages/Blog6.jsx */}
      </main>
    </>
  )
}