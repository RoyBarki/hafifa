import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blue from './Blue';
import Red from './Red';
import Random from './Random';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/red" element={<Red />} /> {/* Red page */}
        <Route path="/blue" element={<Blue />} /> {/* Blue page */}
        <Route path="/random" element={<Random />} /> {/* Random Page */}
      </Routes>
    </Router>
  );
}

export default App;