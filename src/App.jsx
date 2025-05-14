import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import CuratedPrograms from '../pages/CuratedPrograms';
import PostGallery from '../pages/post';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/programs" element={<CuratedPrograms/>} />
        <Route path="/resources/posts" element={<PostGallery/>} />
        <Route path="/resources/blogs" element={<div>Blogs Page</div>} />
        <Route path="/contact" element={<ContactUs/>} />
        {/* Add more routes as needed */}
        <Route path="/" element={<div>Welcome to Emotionease</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;