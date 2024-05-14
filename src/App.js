
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom'; // Import BrowserRouter and other necessary components
import Home from './component/Home';
import Store from './component/Store';
import About from './component/About';
import CartMain from './cart/CartMain';
import { Context } from './store/Context';
import Contact from './component/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCart, setShowCart] = useState(false); // State to manage cart visibility

  // Function to handle section click
  const handleSectionClick = (section) => {
    if (section === 'cart') {
      setShowCart(true); // Show cart when clicking on 'cart'
    } else {
      setActiveSection(section);
    }
  };

  // Function to close the cart
  const handleCloseCart = () => {
    setShowCart(false);
  };

  const [cartItem, setCartItem] = useState([]);
  const [totalItem, setTotalItem] = useState(0);

  const addCart = (itemname, itemprice) => {
    const newItem = [...cartItem, { name: itemname, price: itemprice }]
    setCartItem(newItem);
    const count = newItem.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    setTotalItem(count);
  }

  const removeCart = (itemname) => {
    const delItem = cartItem.filter((item) => item.name !== itemname)
    setCartItem(delItem);
    const count = delItem.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    setTotalItem(count);
  }

  return (
    <Context.Provider value={{ cartItem, totalItem, addCart, removeCart }}>
      <Router> {/* Wrap your application content with BrowserRouter */}
        <div>
          {/* Navbar */}
          <nav className="p-3 flex bg-black justify-center items-center">
            <div className={`flex-none w-20 h-7 `}>
              <NavLink to="/home" onClick={() => handleSectionClick('home')} className="text-white h-2">Home</NavLink> {/* Use Link instead of a for navigation */}
            </div>
            <div className={`flex-none w-20 h-7 `}>
              <NavLink to="/store" onClick={() => handleSectionClick('store')} className="text-white">Store</NavLink>
            </div>
            <div className={`flex-none w-20 h-7 `}>
              <NavLink to="/about" onClick={() => handleSectionClick('about')} className="text-white">About</NavLink>
            </div>
            <div className={`flex-none w-20 h-7 `}>
              <NavLink to="/contact" onClick={() => handleSectionClick('contact')} className="text-white">Contact</NavLink>
            </div>
            <div className='text-white text-base w-20 h-7 flex items-end'>
              <button className='border border-blue-500 px-4' onClick={() => handleSectionClick('cart')}>Cart</button>
            </div>
          </nav>

          {/* Content */}
          
          <Routes>
           <Route path="/home" exact element={<Home />} /> 
           <Route path="/store" element={<Store />} /> 
           <Route path="/about" element={<About />} /> 
           <Route path="/contact" element={<Contact/>}/>
          </Routes>

          {/* Cart Section */}
          {showCart && (<CartMain closeCart={handleCloseCart} />)}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;



////



