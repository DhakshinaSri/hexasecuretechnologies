import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common-components/Navbar";
import Footer from "@/components/common-components/Footer";
import ScrollToTop from "@/components/common-components/ScrollToTop";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Security from "@/pages/Security";
import Training from "@/pages/Training";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industriesserved" element={<Industries />} />
        <Route path="/securitymethodology" element={<Security />} />
        <Route path="/trainingandcertifications" element={<Training />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;