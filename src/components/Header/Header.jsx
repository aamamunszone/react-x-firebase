import React from 'react';
import Container from '../Container/Container';
import NavItem from '../NavItem/NavItem';
import { Link } from 'react-router';

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavItem to="/home">Home</NavItem>
      </li>
      <li>
        <NavItem to="/about">About</NavItem>
      </li>
      <li>
        <NavItem to="/services">Services</NavItem>
      </li>
      <li>
        <NavItem to="/contact">Contact</NavItem>
      </li>
      <li>
        <NavItem to="/dashboard">Dashboard</NavItem>
      </li>
      <li>
        <NavItem to="/faq">FAQ</NavItem>
      </li>
    </>
  );

  return (
    <header className="shadow-md sticky top-0 z-50">
      <Container className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="pr-3 text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-box z-1 mt-6 w-52 p-2 gap-1 shadow-md"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="lg:text-xl font-semibold tracking-wide text-[lime] whitespace-nowrap">
            REACT <span className="text-[tomato]">X</span> FIREBASE
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:gap-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/auth"
            className="px-6 py-2 bg-linear-to-br from-[#0f9b0f] to-[#2a0845] text-white rounded-md"
          >
            Login
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
