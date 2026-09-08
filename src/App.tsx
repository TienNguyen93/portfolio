import React, { useState, useEffect } from 'react';
import { Topbar } from './components/sections/Topbar';
import { HomeView } from './components/sections/HomeView';
import { WorkView } from './components/sections/WorkView';
import { DonorSegmentationDetail } from './components/sections/DonorSegmentationDetail';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'work' | 'donor-segmentation'>(() => {
    const hash = window.location.hash;
    if (hash === '#/projects/donor-segmentation') return 'donor-segmentation';
    if (hash === '#/work') return 'work';
    return 'home';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  // Sync theme class on documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/projects/donor-segmentation') {
        setCurrentView('donor-segmentation');
      } else if (hash === '#/work') {
        setCurrentView('work');
      } else {
        setCurrentView('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectView = (view: 'home' | 'work') => {
    setCurrentView(view);
    window.location.hash = view === 'work' ? '#/work' : '#/';
    window.scrollTo(0, 0);
  };

  const handleOpenDonorSegmentation = () => {
    setCurrentView('donor-segmentation');
    window.location.hash = '#/projects/donor-segmentation';
    window.scrollTo(0, 0);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[var(--accent)] selection:text-white">
      <div>
        <Topbar
          currentView={currentView}
          onSelectView={handleSelectView}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main>
          {currentView === 'home' && (
            <HomeView
              onSeeWork={() => handleSelectView('work')}
              onOpenContact={() => setIsContactOpen(true)}
            />
          )}

          {currentView === 'work' && (
            <WorkView
              onOpenDonorSegmentation={handleOpenDonorSegmentation}
            />
          )}

          {currentView === 'donor-segmentation' && (
            <DonorSegmentationDetail />
          )}
        </main>
      </div>

      <Footer
        isContactOpen={isContactOpen}
        onOpenContact={() => setIsContactOpen(true)}
        onCloseContact={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
