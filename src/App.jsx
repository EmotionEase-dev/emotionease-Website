import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import CuratedPrograms from '../pages/CuratedPrograms';
import Blog from '../pages/Blogs';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/programs" element={<CuratedPrograms/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/contact" element={<ContactUs/>} />
        {/* Add more routes as needed */}
        <Route path="/" element={<div>Welcome to Emotionease</div>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;