import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JoinFlow from './components/JoinFlow';
import Socials from './components/Socials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col w-full">
      {/* Global Background Glow Effects */}
      <div className="fixed top-[-100px] left-[-150px] w-[400px] h-[400px] bg-indigo-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[200px] right-[-150px] w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <Header />
      
      <main className="flex-grow">
        <Hero />
        <JoinFlow />
        <Socials />
      </main>

      <Footer />
    </div>
  );
};

export default App;