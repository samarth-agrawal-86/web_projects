import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import About from './pages/AboutPage';
import Home from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';
import OrderSummary from './pages/OrderSummaryPage';
import ProductsFeatured from './pages/ProductsFeatured';
import ProductsPage from './pages/ProductsPage';
import ProductsNew from './pages/ProductsNew';
import UsersPage from './pages/UsersPage';
import AdminPage from './pages/AdminPage';
import UserDetailsPage from './pages/UserDetails';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="products" element={<ProductsPage />}>
          <Route path="featured" element={<ProductsFeatured />} />
          <Route path="new" element={<ProductsNew />} />
        </Route>
        <Route path="users" element={<UsersPage />}>
          <Route path=":userId" element={<UserDetailsPage />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </div>
  );
}

export default App;
