import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import BackToTop from '@/components/ui/BackToTop';
import ChatBox from '@/components/layout/ChatBox';

const MainLayout = ({ 
  children, 
  onHome, 
  onAbout, 
  isDarkMode, 
  toggleTheme, 
  scrollProgress, 
  showBackToTop 
}) => {
  return (
    <>
      <ScrollProgress progress={scrollProgress} />
      <BackToTop show={showBackToTop} />
      
      <Navbar 
        onHome={onHome} 
        onAbout={onAbout} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />

      <main>
        {children}
      </main>

      <Footer onHome={onHome} />
      <ChatBox />
    </>
  );
};

export default MainLayout;
