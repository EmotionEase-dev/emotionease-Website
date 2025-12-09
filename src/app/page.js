import Navbar from './components/Navbar'

export const metadata = {
  title: 'EmotionEase: Online Mental Health Counseling',
  description: 'Professional online mental health counseling services for stress, anxiety, depression, and relationship issues',
}

// Import your Home component content from temp-pages/Home.jsx
// For now, we'll create a wrapper that includes Navbar

export default function HomePage() {
  // TODO: Copy the JSX content from pages/Home.jsx here
  // Remove the component wrapper, just keep the JSX
  
  return (
    <>
      <Navbar />
      <main>
        {/* 
          COPY CONTENT FROM: src/app/temp-pages/Home.jsx
          Paste the JSX here (everything inside the return statement)
        */}
        <h1>Home Page - Copy content from temp-pages/Home.jsx</h1>
      </main>
    </>
  )
}