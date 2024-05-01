import React from "react";
// import { links } from "../../links";
import { NavLink } from "react-router-dom";

function NavItem() {
  return (
    <>
      <ul className="hidden sm:ml-6 sm:flex">
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
          <div className="absolute top-0 -left-10 transition opacity-0 invisible  group-hover:translate-y-5 translate-y-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
            <div className="relative top-7 p-6 bg-white rounded-xl shadow-xl w-full">
              <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
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
          </NavLink>
          <div className="absolute top-0 -left-10 transition opacity-0 invisible group-hover:translate-y-5 translate-y-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-1 duration-500 ease-in-out rounded-sm"></div>
              <div className="relative z-10">
                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <p className=" tracking-wider font-medium text-[15px]">
                      The Suite
                    </p>
                    <ul className="mt-1 pb-4 text-[13px] text-gray-800">
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-indigo-600"
                        >
                          Course Editor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-indigo-600"
                        >
                          Course Editor
                        </a>
                      </li>
                    </ul>
                    <p className="uppercase tracking-wider font-medium text-[15px]">
                      The Suite
                    </p>
                    <ul className="mt-1 pb-4 text-[13px] text-gray-800">
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-indigo-600"
                        >
                          Course Editor
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-2 py-1 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-500 font-semibold hover:text-indigo-600"
                        >
                          Course Editor
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-2 relative">
                    <div className="absolute inset-0 bg-cover bg-center">
                      <div className="relative z-10 px-6 mt-4 md:mt-0">
                        <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
                          Men&apos;s Collection
                        </h2>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Illo, nobis?
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
                        >
                          Explore our brands
                          <span className="sr-only">Explore our brands </span>
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
        <li className="relative group flex space-x-4">
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `rounded-md px-3 py-2 text-sm font-medium ${
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
            aria-current="page"
          >
            Women
          </NavLink>
          <div className="absolute top-0 -left-10 transition opacity-0 invisible group-hover:translate-y-5 translate-y-0 group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
            <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
              <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-1 duration-500 ease-in-out rounded-sm"></div>
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
                          At Flowbite, we have a portfolio of brands that cater
                          to a variety of preferences.
                        </p>
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
                        >
                          Explore our brands
                          <span className="sr-only">Explore our brands </span>
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
      </ul>
    </>
  );
}

// function NavItem() {
//   return (
//     <>
//       {links.map((links) => (
//         <ul key={links.id} className="hidden sm:ml-6 sm:block">
//           <li className="flex space-x-4">
//             <NavLink
//               to={links.path}
//               className={({ isActive }) =>
//                 `rounded-md px-3 py-2 text-sm font-medium ${
//                   isActive
//                     ? "bg-gray-900 text-white"
//                     : "text-gray-300 hover:bg-gray-700 hover:text-white"
//                 }`
//               }
//               aria-current="page"
//             >
//               {links.title}
//             </NavLink>
//           </li>
//         </ul>
//       ))}
//     </>
//   );
// }

export default NavItem;
