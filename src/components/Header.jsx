import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-teal-300 text-white p-4">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold">Pizza Mania 🍕</div>
        <ul className="flex space-x-4">
          <li>
            {/* Link for navigating to the homepage which displays menu */}
            <Link to="/" className="hover:text-teal-900">
              HOME
            </Link>
          </li>
          <li>
            {/* Link for navigating to menu */}
            <Link to="/" className="hover:text-teal-900">
              MENU
            </Link>
          </li>
          <li>
            {/* Link for navigating to cart */}
            <Link to="/cart" className="hover:text-teal-900">
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
