import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function UsersPage() {
  return (
    <div>
      <h1>Users Page</h1>
      <nav className="general-nav">
        <Link to="1">User 1</Link>
        <Link to="2">User 2</Link>
        <Link to="3">User 3</Link>
        <Link to="admin">Admin</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default UsersPage;
