import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the correct section when the hash changes
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="header">
      <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-6 pb-4">
        sophia's portfolio
      </h1>
      <hr className="border-gray-400 w-full"></hr>
      <nav>
        <ul className="sm:text-base md:text-lg lg:text-xl flex gap-x-8 gap-y-3 flex-wrap py-2">
          <li className="hover:font-semibold hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:font-semibold hover:underline">
            <Link to="/#projects">projects</Link> {/* FIXED */}
          </li>
          <li className="hover:font-semibold hover:underline">
            <Link to="/#aboutme">about me</Link> {/* FIXED */}
          </li>
          <li className="hover:font-semibold hover:underline">
            <Link to="/#contactme">contact me</Link> {/* FIXED */}
          </li>
        </ul>
      </nav>
      <hr className="border-gray-400 w-full"></hr>
    </div>
  );
};

export default Header;
