import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route        
} from "react-router-dom";
import Home from './pages/home';
import Products from './pages/products';
import About from './pages/about';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route grab: <Route path='' element={} /> */}
        <Route path='/' element={<Home /> } />
        <Route path='/products' element={<Products />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
