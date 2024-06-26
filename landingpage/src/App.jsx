import './App.css';
import Desktop from "./pages/Desktop";
import Tablet from "./pages/Tablet";
import Mobile from "./pages/Mobile";
import DesktopPartner from "./pages/DesktopPartner";
import TabletPartner from './pages/TabletPartner';
import MobilePartner from './pages/MobilePartner';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let content;
  if (windowSize > 1300) {
    content = <Desktop />;
  } else if (windowSize > 748) {
    content = <Tablet />;
  } else {
    content = <Mobile />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={content} />
        <Route path="/desktop-partner" element={<DesktopPartner />} />
        <Route path="/tablet-partner" element={<TabletPartner/>}/>
        <Route path="/mobile-partner" element={<MobilePartner/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;