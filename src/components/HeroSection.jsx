/* eslint-disable no-unused-vars */
import React from "react";
import Business from "../images/Business.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <React.Fragment>

    <div className="relative isolate px-6 pt-8 lg:px-8 w-full bg-hero bg-black bg-blend-luminosity bg-center bg-cover bg-no-repeat">
      <div className="  mx-auto max-w-2xl py-28 md:py-28 sm:py-28 lg:py-24">
        <div className="text-start relative">
          <h1 className="text-4xl font-semibold tracking-tight text-cyan-900 sm:text-6xl">
            Fast means of boosting your Business.
          </h1>
          <p className="mt-6 leading-8 text-white text-lg font-medium hover:text-gray-900">
            Our Business Loan offers a fast and secure way of boosting an
            individual&#39;s income. It is ideal for all entrepreneurs engaged in
            income generating...
          </p>
          <div className="mt-10 flex items-center justify-start gap-x-6">
            <Link
              href=""
              className="rounded-3xl bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 hover:text-cyan-500"
            >
              Open Account
            </Link>
            <Link
              href="#"
              className="rounded-3xl bg-cyan-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 hover:text-cyan-500"
            >
              Apply for a Loan
            </Link>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
        
  );
};

export default HeroSection;
