import React from 'react';
import { NavLink } from 'react-router';

const NavItem = ({ to, children, className = '' }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-6 py-2 rounded-md ${
          isActive
            ? 'bg-linear-to-br from-[#ff0084] to-[#33001b] text-white'
            : 'bg-gray-300'
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
