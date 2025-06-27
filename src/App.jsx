
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import CuratedPrograms from '../pages/CuratedPrograms';
import TermsAndConditions from '../components/TermsAndConditions';

import WorkplaceStressManagementPage from '../pages/WorkplaceStress';
import StressManagementPage from '../pages/StressManagement';
import ParentCoachingPage from '../pages/ParentCoaching';
import PremaritalCounsellingPage from '../pages/PremaritalCounselling';
import BurnoutTherapyPage from '../pages/BurnoutTherapy';

import { useEffect } from 'react';
import './App.css';

function App() {
  // useEffect(() => {
  //   // Permanent watermark element
  //   const createPermanentWatermark = () => {
  //     const watermark = document.createElement('div');
  //     watermark.className = 'permanent-watermark';
  //     watermark.textContent = 'EmotionEase - All Rights Reserved';
  //     document.body.appendChild(watermark);
  //     return watermark;
  //   };

  //   // Temporary alert watermark
  //   const showAlertWatermark = (message) => {
  //     const alert = document.createElement('div');
  //     alert.className = 'watermark-alert';
  //     alert.textContent = message;
  //     document.body.appendChild(alert);
      
  //     setTimeout(() => {
  //       alert.style.opacity = '0';
  //       setTimeout(() => document.body.removeChild(alert), 500);
  //     }, 2000);
  //   };

  //   // Event handlers
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //     showAlertWatermark('Right-click disabled');
  //   };

  //   const handleKeyDown = (e) => {
  //     const blockedShortcuts = [
  //       { keys: ['I', 'J'], ctrl: true, shift: true }, // Dev tools
  //       { keys: ['F12'] } // Dev tools
  //     ];

  //     const isBlocked = blockedShortcuts.some(shortcut => 
  //       shortcut.keys.includes(e.key) &&
  //       (shortcut.ctrl ? e.ctrlKey : true) &&
  //       (shortcut.shift ? e.shiftKey : true)
  //     );

  //     if (isBlocked) {
  //       e.preventDefault();
  //       showAlertWatermark('Shortcut disabled: ' + 
  //         (e.ctrlKey ? 'Ctrl+' : '') + 
  //         (e.shiftKey ? 'Shift+' : '') + 
  //         e.key.toUpperCase());
  //     }
  //   };

  //   // Initialize protection
  //   const permanentWatermark = createPermanentWatermark();
    
  //   // Add hover effect
  //   const handleMouseEnter = () => {
  //     permanentWatermark.style.opacity = '1';
  //     permanentWatermark.style.color = 'rgba(107, 226, 140, 0.9)';
  //   };
    
  //   const handleMouseLeave = () => {
  //     permanentWatermark.style.opacity = '0.8';
  //     permanentWatermark.style.color = 'rgba(107, 226, 140, 0.7)';
  //   };

  //   permanentWatermark.addEventListener('mouseenter', handleMouseEnter);
  //   permanentWatermark.addEventListener('mouseleave', handleMouseLeave);

  //   // Add event listeners
  //   document.addEventListener('contextmenu', handleRightClick);
  //   document.addEventListener('keydown', handleKeyDown);

  //   // Cleanup function
  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('keydown', handleKeyDown);
      
  //     permanentWatermark.removeEventListener('mouseenter', handleMouseEnter);
  //     permanentWatermark.removeEventListener('mouseleave', handleMouseLeave);
  //     document.body.removeChild(permanentWatermark);
      
  //     // Remove any existing alert watermarks
  //     document.querySelectorAll('.watermark-alert').forEach(alert => {
  //       document.body.removeChild(alert);
  //     });
  //   };
  // }, []);

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<CuratedPrograms />} />
        <Route path="/privacy & policy" element={<TermsAndConditions/>} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/WorkStress" element={<WorkplaceStressManagementPage />} />
        <Route path="/ParentCoaching" element={<ParentCoachingPage />} />
        <Route path="/PremaritalCounselling" element={<PremaritalCounsellingPage/>} />
        <Route path="/BurnoutTherapy" element={<BurnoutTherapyPage />} />
        <Route path="/StressManagement" element={<StressManagementPage />} />

        <Route path="*" element={<div className="not-found">404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;