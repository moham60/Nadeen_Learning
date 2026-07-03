import { useState, useEffect } from 'react';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Statistics from './sections/Statistics';
import AboutTeacher from './sections/AboutTeacher';
import Features from './sections/Features';
import Courses from './sections/Courses';
import AwardsSlider from './sections/AwardsSlider';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import Faq from './sections/Faq';
import Footer from './sections/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-surface text-on-background min-h-screen">
        <Navbar isDark={isDark} toggleDarkMode={() => setIsDark(prev => !prev)} />
        <main>
          <Hero />
          <Statistics />
          <AboutTeacher />
          <Features />
          <Courses />
          <AwardsSlider />
          <Gallery />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
      </div>
    </div>
  );
}
