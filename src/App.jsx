import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Article from './Pages/Article';
import Contact from './Pages/Contact'; // Impor Contact jika belum diimpor
import Details from './Component/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Details" element={<Details />} /> 
      </Routes>
    </Router>
  );
}

export default App;
