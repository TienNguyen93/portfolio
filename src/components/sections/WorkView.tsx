import React, { useState, useEffect } from 'react';

interface WorkViewProps {
  onOpenDonorSegmentation: () => void;
}

type RoleFilter = 'all' | 'ai & automation' | 'data & bi' | 'python & ML';

export const WorkView: React.FC<WorkViewProps> = ({ onOpenDonorSegmentation }) => {
  const [activeFilter, setActiveFilter] = useState<RoleFilter>('all');
  const [activeSection, setActiveSection] = useState<string>('tldr');

  const tocItems = [
    { id: 'tldr', label: 'tl;dr' },
    { id: 'previously', label: 'experience' },
    { id: 'education', label: 'education' },
    { id: 'builds', label: 'builds' },
    { id: 'skills-tools', label: 'skills & tools' },
  ];

  const filterOptions: RoleFilter[] = [
    'ai & automation',
    'data & bi',
    'python & ML',
  ];

  // IntersectionObserver for auto TOC highlight
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const matchesFilter = (tags: string[]) => {
    if (activeFilter === 'all') return true;
    return tags.includes(activeFilter);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12">
      {/* Role Filter Bar / Lens Filters */}
      <div className="mb-10 p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--line)' }}>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          filter focus:
        </div>
        <div className="lens-bar">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(activeFilter === filter ? 'all' : filter)}
              className={`lens-chip ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
          {activeFilter !== 'all' && (
            <button
              onClick={() => setActiveFilter('all')}
              className="lens-chip-clear"
            >
              clear all &times;
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Left Sticky TOC Rail + Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative">
        {/* Left Sticky TOC Rail */}
        <aside className="hidden md:block md:col-span-1">
          <nav className="toc-rail space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest block mb-2 px-3" style={{ color: 'var(--muted)' }}>
              Navigation
            </span>
            {tocItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`toc-item w-full text-left ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Content Area */}
        <main className="col-span-1 md:col-span-3 space-y-16">
          {/* Section 1: tl;dr */}
          <section id="tldr" className="scroll-mt-24">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: 'var(--muted)' }}>
              01 // tl;dr
            </h2>
            <div className="impact-prose">
              Inspired AI Engineer with a Master’s in Data Science from CUNY Graduate Center.

              Accelerated donor prospect research by <em>30%</em> with AI tools that synthesized <em>10+</em> sources, saving <em>5+</em> hours weekly
              Engineered Corporate Donor Journey Map targeting <em>2.5%+</em> email CTR, <em>35%+</em> video play rate, <em>15%+</em> web conversion
              Developed fundraising system targeting <em>$50K+</em> cohort funding, 85%+ donor renewal rate
              Reduced query resolution across <em>8+</em> PostgreSQL schemas to <em>5</em> targeted tables by building a hybrid RAG AI Agent

            </div>
          </section>

          {/* Section 2: experience */}
          <section id="previously" className="scroll-mt-24">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
              02 // experience
            </h2>
            <div className="space-y-6">
              {/* ULimo */}
              <div
                className={`content-card ${!matchesFilter(['ai & automation', 'python & ML']) ? 'opacity-40 grayscale' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                    ULimo <span className="text-xs font-normal text-[var(--muted)]">New York, NY</span>
                  </h3>
                  <span className="text-xs font-mono text-[var(--accent)]">
                    Feb. 2026 &ndash; Sep. 2026
                  </span>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--muted)' }}>
                  Software Automation Engineer Intern
                </p>
                <ul className="space-y-2 text-sm list-disc list-inside mb-4" style={{ color: 'var(--text)' }}>
                  <li>Reduced lead processing time to ∼5 min/lead by developing a n8n proof-of-concept outreach automation workflow</li>
                  <li>Defined product positioning for AI Travel Agent through market analysis of ride-share and AI trip planners</li>
                  <li>Enhanced AI Travel Agent UI/UX on Lovable by implementing role prompting with structured Markdown formatting</li>
                  <li>Increased automated follower acquisition by 20% by refining bot decision logic and error-handling pipelines for edge cases</li>
                  <li>Partnered with leadership to deploy automation tools and track key operational performance metrics</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">ai &amp; automation</span>
                  <span className="chip-item">python &amp; ML</span>
                  <span className="chip-item">n8n</span>
                  <span className="chip-item">Lovable</span>
                </div>
              </div>

              {/* PwC x YouthBuild */}
              <div
                className={`content-card ${!matchesFilter(['ai & automation', 'data & bi']) ? 'opacity-40 grayscale' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                    PwC x YouthBuild <span className="text-xs font-normal text-[var(--muted)]">Extern Remote</span>
                  </h3>
                  <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                    July 2026 &ndash; Aug. 2026
                  </span>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--muted)' }}>
                  Consulting Analyst Extern
                </p>
                <ul className="space-y-2 text-sm list-disc list-inside mb-4" style={{ color: 'var(--text)' }}>
                  <li>Communicated human-AI collaboration recommendations clearly to YouthBuild Global’s CEO and PwC mentors</li>
                  <li>Accelerated donor prospect research by 30% with AI tools that synthesized 10+ sources, saving 5+ hours weekly</li>
                  <li>Engineered Corporate Donor Journey Map targeting &gt;2.5% email CTR, &gt;35% video play rate, &gt;15% web conversion</li>
                  <li>Developed fundraising system targeting $50K+ cohort funding, &gt;14-day contract execution, 85%+ donor renewal rate</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">ai &amp; automation</span>
                  <span className="chip-item">data &amp; bi</span>
                  <span className="chip-item">Strategic AI</span>
                </div>
              </div>

              {/* Congero Technology Group */}
              <div
                className={`content-card ${!matchesFilter(['data & bi', 'ai & automation', 'python & ML']) ? 'opacity-40 grayscale' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                    Congero Technology Group <span className="text-xs font-normal text-[var(--muted)]">Remote</span>
                  </h3>
                  <span className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
                    June 2026 &ndash; July 2026
                  </span>
                </div>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--muted)' }}>
                  Data Analyst / AI Engineer Intern
                </p>
                <ul className="space-y-2 text-sm list-disc list-inside mb-4" style={{ color: 'var(--text)' }}>
                  <li>Reduced query resolution across 8+ PostgreSQL schemas to 5 targeted tables by building a hybrid RAG AI Agent</li>
                  <li>Improved retrieval accuracy by engineering an LLM-driven contextual enrichment pipeline before vectorization</li>
                  <li>Delivered proof-of-concept AI agent using FastAPI and React to enable multi-turn, session-based conversations</li>
                  <li>Led a team of 3 to configure 12 pricing models for 2 AI products in Oracle BRM to simulate scalable SaaS billing</li>
                  <li>Built Tableau dashboards to visualize key revenue KPIs from configured product offerings for managers and stakeholders</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">data &amp; bi</span>
                  <span className="chip-item">ai &amp; automation</span>
                  <span className="chip-item">python &amp; ML</span>
                  <span className="chip-item">PostgreSQL</span>
                  <span className="chip-item">FastAPI</span>
                  <span className="chip-item">Tableau</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: education */}
          <section id="education" className="scroll-mt-24">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
              03 // education
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="content-card">
                <div className="text-xs font-mono mb-1" style={{ color: 'var(--accent)' }}>
                  2023 &ndash; 2025
                </div>
                <h3 className="text-base font-bold" style={{ color: 'var(--text)' }}>
                  CUNY Graduate Center
                </h3>
                <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  M.S. in Data Science
                </p>
                <p className="text-xs mt-2 font-mono" style={{ color: 'var(--text)' }}>
                  GPA: 3.75 / 4.0
                </p>
              </div>

              <div className="content-card">
                <div className="text-xs font-mono mb-1" style={{ color: 'var(--muted)' }}>
                  2018 &ndash; 2022
                </div>
                <h3 className="text-base font-bold" style={{ color: 'var(--text)' }}>
                  Hunter College
                </h3>
                <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  B.A. in Computer Science
                </p>
                <p className="text-xs mt-2 font-mono" style={{ color: 'var(--muted)' }}>
                  Focus: Algorithms &amp; Software Systems
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: builds */}
          <section id="builds" className="scroll-mt-24">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
              04 // featured builds &amp; projects
            </h2>
            <div className="space-y-6">
              {/* Build 1: Donor Segmentation */}
              <div
                className={`content-card relative group cursor-pointer ${!matchesFilter(['ai & automation', 'python & ML']) ? 'opacity-40 grayscale' : ''}`}
                onClick={onOpenDonorSegmentation}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors" style={{ color: 'var(--text)' }}>
                      Donor Segmentation &amp; Personalized Communication
                    </h3>
                  </div>
                  <span className="text-xs font-mono underline group-hover:no-underline" style={{ color: 'var(--accent)' }}>
                    Case Study &rarr;
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  Automated RFM donor tiering and local LLM (Ollama / Llama 3.1) thank-you note drafting system integrated with n8n and Google Sheets. Reduced turnaround from 24+ hours to &lt; 2 minutes and saved 10+ hrs/wk of manual writing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">automation workflow</span>
                  <span className="chip-item">python</span>
                  <span className="chip-item">n8n</span>
                  <span className="chip-item">Ollama</span>
                  <span className="chip-item">Llama 3.1</span>
                </div>
              </div>

              {/* Build 2: Olist ETL Pipeline Project */}
              <div
                className={`content-card ${!matchesFilter(['data & bi', 'python & ML']) ? 'opacity-40 grayscale' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                    Olist E-Commerce ETL &amp; Analytics Pipeline
                  </h3>
                  <a
                    href="https://github.com/TienNguyen93/olist-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--accent)] hover:underline"
                  >
                    GitHub &rarr;
                  </a>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  Built a robust Python/SQL ETL pipeline processing 100K+ Brazilian e-commerce orders into PostgreSQL. Modeled relational schemas and executed analytical queries to uncover logistics bottlenecks and customer LTV.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">data &amp; bi</span>
                  <span className="chip-item">python</span>
                  <span className="chip-item">PySpark</span>
                  <span className="chip-item">ETL</span>
                </div>
              </div>

              {/* Build 3: HVAC Business Automation System */}
              <div
                className={`content-card ${!matchesFilter(['ai & automation']) ? 'opacity-40 grayscale' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold" style={{ color: 'var(--text)' }}>
                    HVAC Business Lead Automation System
                  </h3>
                  <a
                    href="https://github.com/TienNguyen93/hvac-n8n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--accent)] hover:underline"
                  >
                    GitHub &rarr;
                  </a>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                  Developed an automated lead triage and dispatch workflow for service businesses using n8n and Webhooks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">automation workflow</span>
                  <span className="chip-item">n8n</span>
                  <span className="chip-item">Webhooks</span>
                </div>
              </div>


            </div>
          </section>

          {/* Section 5: skills & tools */}
          <section id="skills-tools" className="scroll-mt-24">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
              05 // skills &amp; tools
            </h2>
            <div className="space-y-6">
              {/* Category 1 */}
              <div className="content-card">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--accent)' }}>
                  skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">data analysis</span>
                  <span className="chip-item">automation workflow</span>
                  <span className="chip-item">consulting</span>
                  <span className="chip-item">leadership</span>
                </div>
              </div>

              {/* Category 2 */}
              <div className="content-card">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--accent)' }}>
                  tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="chip-item">python</span>
                  <span className="chip-item">antigravity</span>
                  <span className="chip-item">n8n</span>
                  <span className="chip-item">tableau</span>
                  <span className="chip-item">sql</span>
                  <span className="chip-item">github</span>
                  <span className="chip-item">notion</span>
                  <span className="chip-item">databricks</span>
                  <span className="chip-item">canva</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
