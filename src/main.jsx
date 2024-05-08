import React, { useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import AddCart from './pages/cart.jsx';
import Home from './pages/Home.jsx';
import './index.css';

const rootElement = document.getElementById('root');

export const cartContext = createContext();

const Root = () => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<AddCart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </cartContext.Provider>
  );
};

ReactDOM.createRoot(rootElement).render(<Root />);
