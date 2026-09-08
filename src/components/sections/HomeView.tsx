import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/hero.png';

interface HomeViewProps {
  onSeeWork: () => void;
  onOpenContact: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSeeWork, onOpenContact }) => {
  const [nyTime, setNyTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setNyTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="max-w-[1000px] mx-auto px-6 py-16 md:py-24 flex flex-col justify-center min-h-[calc(100vh-8rem)]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 mb-10">
        {/* Photo Frame */}
        <div className="relative group flex-shrink-0">
          <div
            className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
            style={{ borderColor: 'var(--line)' }}
          >
            <img
              src={heroImg}
              alt="Tien Nguyen"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Live Status & Local Time Row */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            {/* Live status dot */}
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full border"
              style={{ backgroundColor: 'var(--chip)', borderColor: 'var(--line)' }}
            >
              <span className="status-dot"></span>
              <span style={{ color: 'var(--text)' }}>available for AI/ML roles</span>
            </div>

            {/* NY local time */}
            <div
              className="flex items-center gap-2 px-3 py-1 rounded-full border"
              style={{ backgroundColor: 'var(--chip)', borderColor: 'var(--line)', color: 'var(--muted)' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>NY: {nyTime || '15:07:55 PM'}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mt-1" style={{ color: 'var(--text)' }}>
            Tien Nguyen
          </h1>
        </div>
      </div>

      {/* Tagline & One-Liner */}
      <div className="max-w-2xl space-y-6">
        <p className="text-lg md:text-xl font-medium" style={{ color: 'var(--accent)' }}>
          Recent MS Data Science @ CUNY Grad Center
        </p>

        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>
          Passionate about identifying manual tasks to automate for operational efficiency. Developing practical AI applications that translate raw data into real impact.
        </p>

        {/* Quick Action Row */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onOpenContact}
            className="btn-accent text-sm flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            contact me
          </button>

          <button
            onClick={onSeeWork}
            className="btn-outline text-sm flex items-center gap-2"
          >
            see my work &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
