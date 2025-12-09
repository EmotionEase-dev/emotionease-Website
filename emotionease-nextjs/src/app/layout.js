import Script from 'next/script'
import './globals.css'

export const metadata = {
  title: 'EmotionEase: Online Mental Health Counseling',
  description: 'Professional online mental health counseling services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Same as your current site */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Main fonts for styling */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Quicksand:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Decorative fonts from your current site */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;700&family=Dancing+Script:wght@400;700&family=Gochi+Hand&family=Indie+Flower&family=Kalam:wght@300;400;700&family=Pacifico&family=Patrick+Hand&family=Satisfy&family=Comic+Neue&family=Fuzzy+Bubbles:wght@400;700&family=Nunito&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        
        {/* Bootstrap Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/webp" href="/Logo 2 Square.webp" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="sCLnkUu5lCfA3ewGFUfp6LgVtXAoQz9kdt-g8XDvpqc" />
      </head>
      
      <body>
        {children}
        
        {/* Bootstrap JavaScript - CRITICAL for dropdowns to work */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
