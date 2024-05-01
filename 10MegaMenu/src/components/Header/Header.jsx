import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import { links } from "../../links";
import NavImage from "../../assets/images/shopping.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  console.log(activeLink);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfile = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const path = links.path;
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Hamburger Menu */}
            <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                {/* Icon when menu is closed.

                Menu open: "hidden", Menu closed: "block" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${menuOpen ? "hidden" : "block"}`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                {/* Icon when menu is open.

            Menu open: "block", Menu closed: "hidden" */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-6 h-6 ${menuOpen ? "block" : "hidden"}`}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              {/* Profile Logo */}
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto hidden sm:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              {/* Menu Items */}

              <NavItem />

              {/* <ul className="hidden sm:ml-6 sm:block">
                <li className="relative group flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="relative group flex space-x-4">
                  <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`
                    }
                    aria-current="page"
                  >
                    Shop
                  </NavLink>
                  <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-10">
                        <ul className="text-[15px]">
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Get Support
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Case Studies
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              Guides
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                            >
                              News &amp; Events
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="relative group flex space-x-4">
                  <NavLink
                    to="/men"
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-sm font-medium ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      }`
                    }
                    aria-current="page"
                  >
                    Men
                  </NavLink> */}
              {/* Mega menu for men's and women's main menu */}
              {/* <div className="absolute top-0 left-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                    <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                      <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                      <div className="relative z-10">
                        <div className="grid grid-cols-4 gap-6">
                          <div>
                            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              The Suite
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Course Editor
                                  <p className="text-gray-500 font-normal">
                                    All-in-one editor
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Course Editor
                                  <p className="text-gray-500 font-normal">
                                    All-in-one editor
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Accept payments
                                  <p className="text-gray-500 font-normal">
                                    Pre-build payments page
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Closed Captioning
                                  <p className="text-gray-500 font-normal">
                                    Use AI to generate captions
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                              Extensions
                            </p>
                            <ul className="mt-3 text-[15px]">
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Plugins
                                  <p className="text-gray-500 font-normal">
                                    Tweak existing functionality
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Batch uploads
                                  <p className="text-gray-500 font-normal">
                                    Get your time back
                                  </p>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                >
                                  Social sharing
                                  <p className="text-gray-500 font-normal">
                                    Generate content for socials
                                  </p>
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-span-2 relative">
                            <div className="absolute inset-0 bg-cover bg-center">
                              <div className="relative z-10 p-6 mt-4 md:mt-0">
                                <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                                  Our brands
                                </h2>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                  At Flowbite, we have a portfolio of brands
                                  that cater to a variety of preferences.
                                </p>
                                <a
                                  href="#"
                                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
                                >
                                  Explore our brands
                                  <span className="sr-only">
                                    Explore our brands{" "}
                                  </span>
                                  <svg
                                    className="w-3 h-3 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> */}
            </div>
            {/* Search bar */}

            {/* Shopping Cart, Wishlist, User */}
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <div className={menuOpen ? "block" : "hidden"} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                activeLink === "Dashboard"
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              aria-current="page"
              onClick={() => handleLinkClick("Dashboard")}
            >
              Dashboard
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
