import React from 'react';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/aboutus', label: 'AboutUs' },
  { to: '/signup', label: 'SignUp' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">NourishNet</div>
      <ul className="navbar-nav">
        {navItems.map(({ to, label, end }) => (
          <li key={to} className="nav-item">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `nav-link${isActive ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
