// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import ContactUs from '../pages/ContactUs';
// import CuratedPrograms from '../pages/CuratedPrograms';
// import Blog from '../pages/Blogs';
// import TermsAndConditions from '../components/TermsAndConditions';
// import { useEffect } from 'react';
// import './App.css'; // Ensure this imports the file where you wrote the CSS

// function App() {
//   useEffect(() => {
//     const handleRightClick = (e) => e.preventDefault();

//     const handleKeyDown = (e) => {
//       if (
//         (e.ctrlKey && e.key === 'c') ||  // Copy
//         (e.ctrlKey && e.key === 'u') ||  // View Source
//         (e.ctrlKey && e.key === 's') ||  // Save
//         e.key === 'F12'                  // Dev Tools
//       ) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener('contextmenu', handleRightClick);
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('contextmenu', handleRightClick);
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/programs" element={<CuratedPrograms />} />
//         <Route path="/privacy & policy" element={<TermsAndConditions/>} />
//         <Route path="/blogs" element={<Blog />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="*" element={<div>404 Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// Copy and select Allow

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import CuratedPrograms from '../pages/CuratedPrograms';
import Blog from '../pages/Blogs';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<CuratedPrograms />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;