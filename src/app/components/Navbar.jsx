'use client' // Navbar has interactive elements

import Link from 'next/link'
import { useState } from 'react'
// Keep all your other imports (Bootstrap, FontAwesome, etc.)

export default function Navbar() {
  // Keep your existing state and logic
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <nav className="navbar">
      {/* Replace ALL instances of react-router Link */}
      
      {/* OLD: */}
      {/* import { Link } from 'react-router-dom' */}
      {/* <Link to="/">Home</Link> */}
      
      {/* NEW: */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/programs">Programs</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/blog">Blog</Link>
      
      {/* Service Links */}
      <Link href="/work-stress-management-therapy">Workplace Stress</Link>
      <Link href="/parent-coaching">Parent Coaching</Link>
      <Link href="/premarital-counseling">Premarital Counseling</Link>
      <Link href="/burnout-therapy">Burnout Therapy</Link>
      <Link href="/stress-depression-anxiety-management-online">Stress Management</Link>
      <Link href="/couple-therapy">Couples Therapy</Link>
      <Link href="/corporate-wellness">Corporate Wellness</Link>
      
      {/* Keep rest of your Navbar JSX */}
    </nav>
  )
}