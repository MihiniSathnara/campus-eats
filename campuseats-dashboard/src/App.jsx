import { useState } from 'react'
import MenuList from './features/menu/components/MenuLists'
import MenuPage from './features/menu/pages/MenuPage';
import { Routes, Route, NavLink } from "react-router-dom";
import DishDetailPage from './features/menu/pages/DishDetailPage';
import OrderPage from './features/menu/pages/OrderPage';

function App() {

  return (
    <>
      <nav>
        <NavLink to="/">Menu</NavLink>
        <NavLink to="/order">Place Order</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/dish/:id" element={<DishDetailPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="*" element={<p>404 - Page not found</p>} />
      </Routes>
    </>
  )
}

export default App
