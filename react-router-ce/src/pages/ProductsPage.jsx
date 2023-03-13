import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function ProductsPage() {
  return (
    <div>
      <h1>Products Page</h1>
      <input type="text" placeholder="Search Products" />
      <nav className="general-nav">
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default ProductsPage;
