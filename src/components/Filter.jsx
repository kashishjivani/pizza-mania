import React, { useState } from "react";
import { Link } from "react-router-dom";

const Filter = ({ isVeg, toggleIsVeg, sortBy, toggleSort }) => {

  const handleSortChange = (event) => {  // Handling sort value i.e between price and rating
    toggleSort(event.target.value);
  };

  const handleToggle = () => {  // Toggling the value between veg and non veg
    toggleIsVeg();
  };

  return (
    <div className="bg-indigo-100 mt-3 flex flex-row justify-between p-4">
      <div className="flex flex-row space-x-4">
        <div className="relative">
          {/* Select input for sorting */}
          <select
            className="appearance-none bg-indigo-300 hover:bg-indigo-400  border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow focus:outline-none focus:shadow-outline text-black"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="rating">Sort by rating</option>
            <option value="price">Sort by price</option>
          </select>
          {/* Dropdown icon */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-4-4h8z" />
            </svg>
          </div>
        </div>
        {/* Button for toggling between veg and non veg */}
        <div>
          <button
            onClick={handleToggle}
            className="bg-white bg-indigo-300 hover:bg-indigo-400 rounded-md px-4 py-2"
          >
            {isVeg ? "Non-Veg" : "Veg"}
          </button>
        </div>
      </div>
      {/* Button for viewing cart */}
      <div className="px-1 py-2">
        <Link to="/cart" className="bg-indigo-300 hover:bg-indigo-400 px-4 py-2 rounded-lg">
          View Cart
        </Link>
      </div>
    </div>
  );
};

export default Filter;
