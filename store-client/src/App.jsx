import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from "./context/AuthContext";
import Navbar from './components/Navbar'
import './index.css'
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
import OffersPage from './pages/OffersPage';
import CartShoppingPage from './pages/CartShoppingPage';
import ProductsPage from './pages/ProductsPage';


function App() {
  const showNavbar = ['/', '/contacto', '/ofertas', '/carrito', '/productos'].includes(window.location.pathname)
  return (
    <Router>

      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/login' element={
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        } />
        <Route path='/admin' element={

          <AuthProvider>
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          </AuthProvider>
        } />
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/contacto' element={<ContactPage />} />
        <Route exact path='/ofertas' element={<OffersPage />} />
        <Route exact path='/carrito' element={<CartShoppingPage />} />
        <Route exact path='/productos' element={<ProductsPage />} />

        <Route path='*' element={<NotFoundPage />} />

      </Routes>

    </Router >
  )
}

export default App
