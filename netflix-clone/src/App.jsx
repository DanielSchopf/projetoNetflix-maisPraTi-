import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/search' element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
