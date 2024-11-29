import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from "./Mainpage";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          {/*<Route path="/about" element={</>} />*/}
          {/*<Route path="/contact" element={<Contact />} />*/}
        </Routes>
      </Router>
  );
}

export default App;
