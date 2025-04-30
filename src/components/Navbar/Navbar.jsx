import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Hamburger & Close Icons
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Mens Wear", link: "/mens-wear" },
  { id: 3, name: "Women's Wear", link: "/womens-wear" },
  { id: 4, name: "Sports", link: "/sports" },
  { id: 5, name: "About Us", link: "/about" },
  { id: 6, name: "Contact Us", link: "/contact" },
  { id: 7, name: "Cart", link: "/cart" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl flex items-center gap-1">
            <FiShoppingBag size="30" />
            ShopMe
          </Link>

          {/* Search and DarkMode */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 dark:text-white group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <DarkMode />

            {/* Mobile menu button */}
            <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
              {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar (Desktop) */}
      <div data-aos="zoom-in" className="justify-center hidden sm:flex">
        <ul className="flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 py-2 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white dark:bg-slate-800 px-4 pb-4 shadow-md">
          <ul className="flex flex-col gap-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  onClick={closeMenu}
                  className="block py-2 border-b border-gray-200 dark:border-gray-600 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
