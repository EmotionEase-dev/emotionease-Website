import Navbar from '../components/Navbar'
import BlogList from '../components/BlogList'
 
export const metadata = {
  title: 'Mental Health Blog - EmotionEase',
  description: 'Articles and resources on mental health, emotional wellness, and therapy',
  keywords: 'mental health blog, therapy articles, wellness resources, emotional wellness, mental health articles',
}
 
export default function BlogListPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogList />
      </main>
    </>
  )
}

