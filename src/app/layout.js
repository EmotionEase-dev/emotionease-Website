import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import './index.css'
import StructuredData from './components/StructuredData'

export const metadata = {
  title: 'EmotionEase: Online Mental Health Counseling',
  description: 'Professional online mental health counseling and emotional support services',
  keywords: 'mental health, counseling, therapy, emotional support, stress management, burnout therapy, couples therapy, workplace wellness',
  verification: {
    google: 'sCLnkUu5lCfA3ewGFUfp6LgVtXAoQz9kdt-g8XDvpqc',
  },
  openGraph: {
    title: 'EmotionEase: Online Mental Health Counseling',
    description: 'Professional mental health support and counseling services',
    type: 'website',
    url: 'https://emotionease.in',
    siteName: 'EmotionEase',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmotionEase: Online Mental Health Counseling',
    description: 'Professional mental health support and counseling',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Gochi+Hand&family=Indie+Flower&family=Kalam:wght@300;400&family=Pacifico&family=Patrick+Hand&family=Satisfy&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />

         {/* existing head content */}
        <StructuredData />

      </head>
      <body>
        {children}
        
        {/* Bootstrap JS */}
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          async
        />
      </body>
    </html>
  )
}

