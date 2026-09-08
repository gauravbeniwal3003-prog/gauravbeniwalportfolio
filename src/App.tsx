import SignalLine from './components/SignalLine';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import BeyondDevelopment from './components/BeyondDevelopment';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Signature subtle animated signal line */}
      <SignalLine />

      {/* Floating Liquid-Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Skills />
        <BeyondDevelopment />
        <Contact />
      </main>

      {/* Minimal Premium Footer */}
      <Footer />
    </div>
  );
}
