import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const DropdownLinks = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [timeOutId, settimeOutId] = useState(null)

  const handleMenuMouseEnter = () => {
    setIsOpen(true);
    clearTimeout(timeOutId)
  };

  const handleMenuMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false)
    }, 400)

    settimeOutId(id)

  };

  return (
    <li className="list-none"
      onMouseLeave={handleMenuMouseLeave}
    >
      <button
        className={`flex items-center rounded-lg px-1 py-2 text-white font-medium hover:bg-secondary-rgb ${isOpen ? 'bg-secondary-rgb text-white' : ''} hover:text-white transition duration-1000`}
        onMouseMove={handleMenuMouseEnter}
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 mr-1 ${isOpen ? 'transform rotate-180' : ''} `}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.41 6.41L10 10l3.59-3.59L15 7l-5 5-5-5 1.41-1.41L10 7.17l-3.59-3.59L6 3l4 4z"
              onMouseLeave={handleMenuMouseLeave}
            />
          ) : (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.41 10.41L10 13.83l-3.41-3.42L6 12l4 4 4-4-1.59-1.59z"
            />
          )}
        </svg>
      </button>
      {
        isOpen && (
          <ul className="absolute z-10 mt-2 space-y-2 bg-white rounded-md shadow-lg"
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            {links.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.to}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        )
      }
    </li >
  );
};

export default DropdownLinks
