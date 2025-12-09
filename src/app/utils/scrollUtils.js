'use client'

export const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export const handleHashScroll = () => {
  if (typeof window !== 'undefined' && window.location.hash) {
    const id = window.location.hash.substring(1)
    setTimeout(() => scrollToSection(id), 100)
  }
}

'use client'

import { useEffect } from 'react'
import { handleHashScroll } from '../utils/scrollUtils'

export default function Page() {
  useEffect(() => {
    handleHashScroll()
  }, [])
  
  return <div>Content</div>
}