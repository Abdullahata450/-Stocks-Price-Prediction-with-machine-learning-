import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserButton ,SignInButton ,SignedOut,SignedIn} from '@clerk/clerk-react';

const NavBar = () => {
  return (
    <header className=" z-50">
      <nav className="sticky-banner border-gray-200 dark:bg-gray-900" style={{ backgroundColor: "#0D0F1C" }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <h3 className="ml-0 mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-4xl dark:text-white">
            StockVision
          </h3>
          <div className="flex items-center w-10 h-10 md:order-2 space-x-3 p-2 rtl:space-x-reverse mr-8">

            <SignedOut>
              <SignInButton mode="modal"
              className="cl-signInButton "
               />
            </SignedOut>
            <SignedIn>
              <UserButton signOutRedirectUrl='/' />
            </SignedIn>

          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {[
                { path: "/", label: "Home" },
                { path: "/trade", label: "Trade" },
                { path: "/orders", label: "Orders" },
                { path: "/pricing", label: "Pricing" },
                { path: "/markets", label: "Markets" },
                { path: "/about-us", label: "About Us" },
                { path: "/predictions", label: "Predictions" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 px-3 text-blue-700 dark:text-blue-500"
                        : "block py-2 px-3 text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;