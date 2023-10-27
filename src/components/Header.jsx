import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-teal-300 text-white p-4">
      <nav className="mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold hover:text-teal-900">
          <Link to="/">Pizza Mania 🍕</Link>{" "}
        </div>
        <ul className="flex space-x-4">
          <li>
            {/* Link for navigating to the homepage which displays menu */}
            <Link to="/" className="hover:text-teal-900 font-semibold">
              HOME
            </Link>
          </li>
          <li>
            {/* Link for navigating to menu */}
            <Link to="/" className="hover:text-teal-900 font-semibold">
              MENU
            </Link>
          </li>
          <li>
            {/* Link for navigating to cart */}
            <Link to="/cart" className="hover:text-teal-900 font-semibold">
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
