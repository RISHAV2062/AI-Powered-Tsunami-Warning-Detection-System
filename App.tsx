import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoSection from './components/DemoSection';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <DemoSection />
        <Statistics />
        <KeyboardShortcuts />
        <Testimonials />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;