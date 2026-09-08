import React from 'react';

interface TopbarProps {
  currentView: 'home' | 'work' | 'donor-segmentation';
  onSelectView: (view: 'home' | 'work') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({
  currentView,
  onSelectView,
  theme,
  toggleTheme,
}) => {
  return (
    <header className="topbar-nav sticky top-0 z-40 w-full backdrop-blur-md bg-opacity-90">
      <div className="max-w-[1000px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <button
          onClick={() => onSelectView('home')}
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity focus:outline-none"
          style={{ color: 'var(--text)' }}
        >
          tien nguyen
        </button>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-4 text-sm">
            <button
              onClick={() => onSelectView('home')}
              className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
            >
              home
            </button>
            <button
              onClick={() => onSelectView('work')}
              className={`nav-link ${currentView === 'work' ? 'active' : ''}`}
            >
              work
            </button>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg transition-colors hover:bg-[var(--chip)] focus:outline-none"
            style={{ color: 'var(--text)' }}
          >
            {theme === 'dark' ? (
              // Sun icon for dark mode (click to switch to light)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              // Moon icon for light mode (click to switch to dark)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
