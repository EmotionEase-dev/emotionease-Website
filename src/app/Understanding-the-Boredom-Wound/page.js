import Navbar from '../components/Navbar'
import Image from 'next/image'

export const metadata = {
  title: 'Understanding the Boredom Wound - EmotionEase',
  description: 'Exploring inner child wounds and the psychology of boredom',
  keywords: 'inner child, boredom wound, childhood trauma, emotional healing',
  openGraph: {
    title: 'Understanding the Boredom Wound',
    description: 'A deep dive into inner child wounds and healing',
    type: 'article',
    images: ['/assets/A Complete Healing Guide.webp'],
  },
}

export default function BlogPost5() {
  return (
    <>
      <Navbar />
      <main>
        {/* Copy content from temp-pages/Blog5.jsx */}
      </main>
    </>
  )
}