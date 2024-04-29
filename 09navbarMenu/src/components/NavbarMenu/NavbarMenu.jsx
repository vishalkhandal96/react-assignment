import React from "react";

function NavbarMenu() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-pink-700 via-blue-800 antialiased bg-no-repeat text-white h-screen">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <a href="/" className="font-bold text-white text-xl">
          Pipe
        </a>
        <nav>
          <ul className="flex items-center justify-center font-semibold">
            <li className="relative group px3 py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 left-0 transition"></div>
            </li>
            <li className="relative group px3 py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 left-0 transition"></div>
            </li>
            <li className="relative group px3 py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 left-0 transition"></div>
            </li>
            <li className="relative group px3 py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 left-0 transition"></div>
            </li>
            <li className="relative group px3 py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 left-0 transition"></div>
            </li>
            <li className="relative group px3 py-2">
              <button className="hover:opacity-50 cursor-default">
                Products
              </button>
              <div className="absolute top-0 left-0 transition"></div>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a
                href=""
                className="rounded-full px-3 py-2 font-semibold bg-white bg-opacity-10 flex items-center group"
              >
                <span className="mr-2">Sign in</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-current"
                  aria-hidden="true"
                >
                  <g>
                    <path className="opacity-0 group-hover:opacity-100 duration-200"></path>
                    <path
                      className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavbarMenu;
