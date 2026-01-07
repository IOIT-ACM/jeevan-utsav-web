import { useEffect, type FC } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-sand-beige">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;