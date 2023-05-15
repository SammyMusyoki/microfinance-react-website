import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/AboutPages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import FAQs from "./pages/FAQs";
import HomeLayout from "./Layouts/HomeLayout";
import AboutLayout from "./Layouts/AboutLayout";
import Blog from "./pages/AboutPages/Blog";
import Community from "./pages/AboutPages/Community";
import AnnualReports from "./pages/AboutPages/AnnualReports";
import Contact from "./pages/AboutPages/Contact";
import FinancialStatements from "./pages/AboutPages/FinancialStatements";
import BranchNetwork from "./pages/AboutPages/BranchNetwork";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutLayout />}>
          <Route index path=""  element={ <About />} />
          <Route path="annual-reports" element={<AnnualReports/>} />
          <Route path="branch-networks" element={<BranchNetwork/>} />
          <Route path="blog" element={<Blog />} />
          <Route path="community" element={<Community/>} />
          <Route path="contact-us" element={<Contact/>} />
          <Route path="financial-statements" element={<FinancialStatements/>} />
        </Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="services" element={<Services />} />
        <Route path="careers-jobs" element={<Careers />} />
        <Route path="frequently-asked-questions" element={<FAQs />} />
      </Route>
    )
  );

function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;
