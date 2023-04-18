import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  function handleNavStyle(state) {
    //state = {isActive: true, isPending: false}
    return {
      color: state['isActive'] ? 'red' : 'black',
    };
  }

  return (
    <nav className="primary-nav">
      <NavLink to="/" style={handleNavStyle}>
        Home
      </NavLink>
      <NavLink to="about" style={handleNavStyle}>
        About
      </NavLink>
      <NavLink to="category" style={handleNavStyle}>
        Category
      </NavLink>
      <NavLink to="products" style={handleNavStyle}>
        Products
      </NavLink>
      <NavLink to="users" style={handleNavStyle}>
        Users
      </NavLink>
    </nav>
  );
}
export default Navbar;

/* Method 1
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
export default Navbar;


Method 2
(Useful in cases like NavBar, SideBar where you need to know the active state of the link)
import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Navbar;
*/
