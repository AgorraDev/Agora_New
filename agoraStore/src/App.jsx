import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route        
} from "react-router-dom";
import { CartProvider } from './components/cartProvider';
import Navigation from './components/nav';
import Footer from './components/footer';
import Home from './pages/home';
import Products from './pages/products';
import About from './pages/about';
import Profile from './pages/profile';


function App() {
  return (
    <>
    {/*Bootstrap link*/}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
    {/*Links End*/}    
    <Router>
    <CartProvider>
    <Navigation />
      <Routes>
        {/* Route grab: <Route path='' element={} /> */}
        <Route path='/' element={<Home /> } />
        <Route path='/products' element={<Products />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    <Footer />
    </CartProvider>
    </Router>
    </>
  );
}

export default App;
