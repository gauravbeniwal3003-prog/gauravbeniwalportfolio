import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignalLine from './components/SignalLine';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import WebsiteBuilderPanipatPage from './pages/WebsiteBuilderPanipatPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import CybersecurityAuditPage from './pages/CybersecurityAuditPage';
import EcommerceDevelopmentPage from './pages/EcommerceDevelopmentPage';
import BusinessAutomationPage from './pages/BusinessAutomationPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
        {/* Signature subtle animated signal line */}
        <SignalLine />

        {/* Floating Liquid-Glass Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1 w-full overflow-x-hidden">
          <Routes>
            {/* Primary Portfolio Home Page */}
            <Route path="/" element={<HomePage />} />

            {/* Central Services Authority Hub */}
            <Route path="/services" element={<ServicesIndexPage />} />

            {/* Specialized High-Intent SEO Landing Pages */}
            <Route path="/services/website-builder-panipat" element={<WebsiteBuilderPanipatPage />} />
            <Route path="/services/app-development" element={<AppDevelopmentPage />} />
            <Route path="/services/cybersecurity-audit" element={<CybersecurityAuditPage />} />
            <Route path="/services/ecommerce-development" element={<EcommerceDevelopmentPage />} />
            <Route path="/services/business-automation" element={<BusinessAutomationPage />} />

            {/* Dedicated Custom 404 Page (maintains link equity & rescues lost traffic) */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Master SEO Authority Footer */}
        <Footer />
      </div>
    </Router>
  );
}
