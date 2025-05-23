import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import CuratedPrograms from '../pages/CuratedPrograms';
import Blog from '../pages/Blogs';
import TermsAndConditions from '../components/TermsAndConditions';
import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Permanent watermark element
    const createPermanentWatermark = () => {
      const watermark = document.createElement('div');
      watermark.className = 'permanent-watermark';
      watermark.textContent = 'EmotionEase - All Rights Reserved';
      document.body.appendChild(watermark);
      return watermark;
    };

    // Temporary alert watermark
    const showAlertWatermark = (message) => {
      const alert = document.createElement('div');
      alert.className = 'watermark-alert';
      alert.textContent = message;
      document.body.appendChild(alert);
      
      setTimeout(() => {
        alert.style.opacity = '0';
        setTimeout(() => document.body.removeChild(alert), 500);
      }, 2000);
    };

    // Event handlers
    const handleRightClick = (e) => {
      e.preventDefault();
      showAlertWatermark('Right-click disabled');
    };

    const handleKeyDown = (e) => {
      const blockedShortcuts = [
        { keys: ['c', 'x', 'u', 's', 'p'], ctrl: true }, // Ctrl+C, Ctrl+X, etc.
        { keys: ['I', 'J'], ctrl: true, shift: true }, // Dev tools
        { keys: ['S'], ctrl: true, shift: true }, // Screenshot
        { keys: ['F12'] } // Dev tools
      ];

      const isBlocked = blockedShortcuts.some(shortcut => 
        shortcut.keys.includes(e.key) &&
        (shortcut.ctrl ? e.ctrlKey : true) &&
        (shortcut.shift ? e.shiftKey : true)
      );

      if (isBlocked) {
        e.preventDefault();
        showAlertWatermark('Shortcut disabled: ' + 
          (e.ctrlKey ? 'Ctrl+' : '') + 
          (e.shiftKey ? 'Shift+' : '') + 
          e.key.toUpperCase());
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('').catch(() => {});
        showAlertWatermark('Print Screen disabled');
      }
    };

    // Initialize protection
    const permanentWatermark = createPermanentWatermark();
    
    // Add hover effect
    const handleMouseEnter = () => {
      permanentWatermark.style.opacity = '1';
      permanentWatermark.style.color = 'rgba(107, 226, 140, 0.9)';
    };
    
    const handleMouseLeave = () => {
      permanentWatermark.style.opacity = '0.8';
      permanentWatermark.style.color = 'rgba(107, 226, 140, 0.7)';
    };

    permanentWatermark.addEventListener('mouseenter', handleMouseEnter);
    permanentWatermark.addEventListener('mouseleave', handleMouseLeave);

    // Apply text selection prevention
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    // Add event listeners
    document.addEventListener('contextmenu', handleRightClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      
      permanentWatermark.removeEventListener('mouseenter', handleMouseEnter);
      permanentWatermark.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeChild(permanentWatermark);
      
      // Remove any existing alert watermarks
      document.querySelectorAll('.watermark-alert').forEach(alert => {
        document.body.removeChild(alert);
      });
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<CuratedPrograms />} />
        <Route path="/privacy & policy" element={<TermsAndConditions/>} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<div className="not-found">404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;

// Copy and select Allow

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import ContactUs from '../pages/ContactUs';
// import CuratedPrograms from '../pages/CuratedPrograms';
// import Blog from '../pages/Blogs';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/programs" element={<CuratedPrograms />} />
//         <Route path="/blogs" element={<Blog />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="*" element={<div>404 Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;