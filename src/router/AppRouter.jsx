import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

// Pages imports
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import SeoLeads from '../pages/SeoLeads';
import WebDesigningLeads from '../pages/WebDesigningLeads';
import ContactUs from '../pages/ContactUs';

/**
 * ScrollToTop helper component.
 * Automatically scrolls window to top on pathname changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard instant scroll reset to top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Main Layout component wrapping pages with fixed Navbar and Footer.
 */
const MainLayout = () => {
  return (
    <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <main style={{ flexGrow: 1, minHeight: 'calc(100vh - 270px)' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* Scroll tracker */}
      <ScrollToTop />
      
      <Routes>
        {/* Layout wrapped routing */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="seo-leads" element={<SeoLeads />} />
          <Route path="web-designing-leads" element={<WebDesigningLeads />} />
          <Route path="contact-us" element={<ContactUs />} />
          
          {/* Redirect all unmatched paths (404) back to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
