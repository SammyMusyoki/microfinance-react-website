import React from 'react'
import{ FaFacebook, FaInstagram, FaLinkedin, FaTwitter}from "react-icons/fa"
import {RiWhatsappFill} from "react-icons/ri"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className=" bottom-0 left-0 z-20 w-full p-4 bg-cyan-200 dark:bg-cyan-950 border-t border-cyan-400">
        <div className="mx-auto w-full max-w-screen-xl">
          <h2
            className=" text-lg font-semibold text-gray-900 
                    dark:text-white"
          >
            Micro<span className="text-black dark:text-cyan-400">Finance</span>
          </h2>
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 uppercase
                    dark:text-cyan-400"
              >
                MicroFinance Savings Product
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    MicroFinance Youth Account
                  </Link>             
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    MicroFinance Fixed Deposit Account
                  </Link>             
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    MicroFinance Flex FD
                  </Link>             
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Save For A Target
                  </Link>             
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Shooting Star Account
                  </Link>             
                </li>
              </ul>
            </div>
            <div>
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 dark:text-cyan-400 uppercase"
              >
                Links
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Our Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2
                className="mb-6 text-sm font-semibold text-gray-900 uppercase 
                    dark:text-cyan-400"
              >
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:border-gray-400">
              &copy; 2023{" "}
              <Link to="https://MicroFinance.com/" className="hover:underline">
                MicroFinance
              </Link>
              . All Rights are Reserved.
            </span>

            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-blue-700 sm:dark:hover:text-blue-700 md:dark:hover:text-blue-700"
              >
                <span className="sr-only">Facebook Page</span>
                <FaFacebook className="w-6 h-6" fill="currentColor" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-red-600 sm:dark:hover:text-red-600"
              >
                <span className="sr-only">Instagram Page</span>
                <FaInstagram className="w-6 h-6" fill="currentColor" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-sky-600 sm:dark:hover:text-sky-600"
              >
                <span className="sr-only">Twitter Page</span>
                <FaTwitter className="w-6 h-6" fill="currentColor" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-blue-600 sm:dark:hover:text-blue-600"
              >
                <span className="sr-only">LinkedIn Page</span>
                <FaLinkedin className="w-6 h-6" fill="currentColor" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-green-600 sm:dark:hover:text-green-600"
              >
                <span className="sr-only">Whatsapp Page</span>
                <RiWhatsappFill className="w-6 h-6" fill="currentColor" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
