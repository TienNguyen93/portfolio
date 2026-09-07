import React from 'react';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';
import { Typography } from './components/ui/Typography';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent relative">
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center bg-theme-pampas/90 backdrop-blur-md border-t border-theme-cloudy/20 shadow-[0_-8px_30px_rgba(0,21,36,0.05)] z-10 relative mt-20">
        <Typography variant="label-sm" className="text-theme-cloudy font-bold">
          © {new Date().getFullYear()} Tien Nguyen. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default App;
