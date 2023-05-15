import React, { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

import { navigation } from "../data";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const [isShowing, setIsShowing] = useState(false)

  const handleClose = () => {
    setIsShowing(prev => !prev)
  }


  const handleActive = () => {
    setIsActive(isActive);
  };
  return (
    <React.Fragment>
      <header className="sticky inset-x-0 top-0 z-50 bg-slate-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1 5 p-1 5">
              <span className="sr-only">Pride</span>
              {/* <img src="" alt="MicroFinance" className="h-8 w-auto" /> */}
              <p className="text-3xl font-medium text-black">
                Micro<span className="text-cyan-500">Finance</span>
              </p>
            </Link>
          </div>

          <div className="flex lg:hidden">
            {
              isShowing ? 

               <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center p-2.5 cursor-pointer text-gray-700 font-bold text-semibold px-2 py-2 mr-2 "
              //  data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
              onClick={handleClose}>
                  <XMarkIcon
                  className="h-8 w-8 text-cyan-500 cursor-pointer"
                  aria-hidden="true"
                />
              </button>

              : <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center p-2.5 cursor-pointer text-gray-700 font-bold text-semibold px-2 py-2 mr-2  "
              //  data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation"
              onClick={handleClose}>
                  <Bars3BottomRightIcon
                  className="h-8 w-8 text-cyan-500 cursor-pointer"
                  aria-hidden="true"
                />
              </button>

            }
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((nav, index) => (
              <Link
                key={index}
                to={nav.href}
                className={`text-sm active:text-cyan-500 focus:text-cyan-500 font-medium 
                text-semibold leading-6 text-gray-900 ${({ isActive }) =>
                  isActive ? "active" : ""}`}
                onClick={handleActive}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <label htmlFor="search" className="block relative">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <MagnifyingGlassIcon className="h-5 w-5 text-cyan-500" />
              </span>
              <input
                type="text"
                className="block bg-white w-full border border-slate-300 rounded-xl 
            py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 
            focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder:italic 
            placeholder:text-slate-400"
                placeholder="Search for anything..."
              />
            </label>
          </div>
        </nav>

        {/* MOBILE MENU SIDE BAR  */}
        <div 
        // id="drawer-navigation" 
        className={`fixed left-0 w-64 z-40 h-full p-4 overflow-y-auto transition-transform  bg-white dark:bg-cyan-950 ${isShowing ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-1000`} tabIndex={-1} aria-labelledby="drawer-navigation-label">
          <h5 
          // id="drawer-navigation-label" 
          className="text-base font-semibold text-gray-500 dark:text-white">Micro<span className="text-black dark:text-cyan-500">Finance</span></h5>

            <div className="py-4 overflow-y-auto">
              <ul className="space-y-2 font-medium">
                    {
                      navigation.map((nav, index) => (
                        <li key={index}>
                          <a  href={nav.href} className="flex items-center p-2 text-gray-900 dark:text-gray-100 ">
                            <span>{nav.icon}</span>
                            <span className="ml-3">{nav.name}</span>
                          </a>
                      </li>
                      ))
                    }
              </ul>
            </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
