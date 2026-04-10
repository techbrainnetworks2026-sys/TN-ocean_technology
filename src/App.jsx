import React, { useState, useEffect } from 'react';

// Data
import { products } from './data/products';
import { faqs } from './data/faqs';
import { productDetails } from './data/productDetails';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatBox from './components/layout/ChatBox';

// UI
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';

// Home Sections
import Hero from './components/home/Hero';
import TrustBadges from './components/home/TrustBadges';
import AboutSection from './components/home/AboutSection';
import Workflow from './components/home/Workflow';
import ProductSection from './components/home/ProductSection';
import Contact from './components/home/Contact';
import FAQ from './components/home/FAQ';
import Testimonials from './components/home/Testimonials';

// Pages
import AboutPage from './components/pages/AboutPage';
import CompanyAboutPage from './components/pages/CompanyAboutPage';
import ProductPage from './components/pages/ProductPage';

function App() {
  const [view, setView] = useState('home'); // 'home', 'details', 'about', 'companyAbout'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll Listeners
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, [isDarkMode]);

  // View Change Scroll Reset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setView('details');
  };

  const handleHomeClick = () => {
    if (view === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('home');
      setSelectedProduct(null);
    }
  };

  // View Routing
  if (view === 'about') {
    return <AboutPage onBack={handleHomeClick} />;
  }

  if (view === 'companyAbout') {
    return <CompanyAboutPage onBack={handleHomeClick} />;
  }

  if (view === 'details' && selectedProduct) {
    return (
      <ProductPage 
        product={selectedProduct} 
        details={productDetails[selectedProduct.id]} 
        onBack={handleHomeClick} 
      />
    );
  }

  return (
    <>
      <ScrollProgress progress={scrollProgress} />
      <BackToTop show={showBackToTop} />

      <Navbar 
        onHome={handleHomeClick} 
        onAbout={() => setView('about')} 
        isDarkMode={isDarkMode} 
        toggleTheme={() => setIsDarkMode(!isDarkMode)} 
      />

      <Hero 
        onExplore={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} 
        onCompanyAbout={() => setView('companyAbout')} 
      />

      <TrustBadges />

      <AboutSection onCompanyAbout={() => setView('companyAbout')} />

      <Workflow />

      <ProductSection 
        products={products} 
        onProductClick={handleProductClick} 
      />

      <Contact />

      <FAQ faqs={faqs} />

      <Testimonials />

      <Footer onHome={handleHomeClick} />

      <ChatBox />
    </>
  );
}

export default App;
