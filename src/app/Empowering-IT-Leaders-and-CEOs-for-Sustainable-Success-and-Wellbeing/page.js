import Navbar from '../components/Navbar'
import Image from 'next/image'

export const metadata = {
  title: 'Empowering IT Leaders and CEOs for Sustainable Success - EmotionEase',
  description: 'Executive coaching for IT directors and CEOs focusing on leadership and wellbeing',
  keywords: 'IT leadership, CEO coaching, executive wellness, leadership development',
  openGraph: {
    title: 'Empowering IT Leaders and CEOs',
    description: 'Leadership coaching for sustainable success',
    type: 'article',
    images: ['/assets/Coaching for IT Directors Leading with Clarity and Confidence.webp'],
  },
}

export default function BlogPost3() {
  return (
    <>
      <Navbar />
      <main>
        {/* Copy content from temp-pages/Blog3.jsx */}
      </main>
    </>
  )
}