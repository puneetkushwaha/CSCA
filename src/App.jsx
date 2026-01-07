import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import Certifications from './pages/Certifications';
import CertificationDetail from './pages/CertificationDetail';
import CertificationPathway from './pages/CertificationPathway';
import ExamSystem from './pages/ExamSystem';
import CertificateVerification from './pages/CertificateVerification';
import DigitalBadges from './pages/DigitalBadges';
import CorporateTraining from './pages/CorporateTraining';
import Resources from './pages/Resources';
import PartnersEcosystem from './pages/PartnersEcosystem';
import Accreditation from './pages/Accreditation';
import CareerOpportunities from './pages/CareerOpportunities';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import CursorFollower from './components/CursorFollower';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CursorFollower />
      <AnnouncementBar />
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Public Routes with Navbar/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/certification/:id" element={<CertificationDetail />} />

          {/* New Sitemap Routes */}
          <Route path="/certification-pathway" element={<CertificationPathway />} />
          <Route path="/exam-system" element={<ExamSystem />} />
          <Route path="/certificate-verification" element={<CertificateVerification />} />
          <Route path="/digital-badges" element={<DigitalBadges />} />
          <Route path="/career-opportunities" element={<CareerOpportunities />} />
          <Route path="/partners-ecosystem" element={<PartnersEcosystem />} />
          <Route path="/accreditation" element={<Accreditation />} />

          <Route path="/corporate-training" element={<CorporateTraining />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Route>

        {/* Auth & App Routes (No Standard Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
