import Link from 'next/link'
import Navbar from './components/Navbar'

export const metadata = {
  title: '404 - Page Not Found - EmotionEase',
  description: 'The page you are looking for could not be found',
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ 
        textAlign: 'center', 
        padding: '100px 20px',
        minHeight: '60vh'
      }}>
        <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ marginBottom: '30px' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          style={{ 
            padding: '10px 30px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Return Home
        </Link>
      </main>
    </>
  )
}