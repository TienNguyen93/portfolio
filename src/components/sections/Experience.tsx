import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Software Automation Engineer Intern',
      company: 'ULimo · New York, NY',
      date: 'Feb 2026 - Sep 2026',
      bullets: [
        'Reduced lead processing time to ~5 min/lead by developing a n8n proof-of-concept outreach automation workflow',
        'Defined product positioning for AI Travel Agent through market analysis of ride-share and AI trip planners',
        'Enhanced AI Travel Agent UI/UX on Lovable by implementing role prompting with structured Markdown formatting',
        'Increased automated follower acquisition by 20% by refining bot decision logic and error-handling pipelines for edge cases',
        'Partnered with leadership to deploy automation tools and track key operational performance metrics'
      ],
    },
    {
      role: 'PwC x YouthBuild Consulting Analyst Extern',
      company: 'Extern · Remote',
      date: 'July 2026 - Aug 2026',
      bullets: [
        'Communicated human-AI collaboration recommendations clearly to YouthBuild Global’s CEO and PwC mentors',
        'Accelerated donor prospect research by 30% with AI tools that synthesized 10+ sources, saving 5+ hours weekly',
        'Engineered Corporate Donor Journey Map targeting >2.5% email CTR, >35% video play rate, >15% web conversion',
        'Developed fundraising system targeting $50K+ cohort funding, >14-day contract execution, 85%+ donor renewal rate'
      ],
    },
    {
      role: 'Data Analyst/AI Engineer Intern',
      company: 'Congero Technology Group · Remote',
      date: 'June 2026 - July 2026',
      bullets: [
        'Reduced query resolution across 8+ PostgreSQL schemas to 5 targeted tables by building a hybrid RAG AI Agent',
        'Improved retrieval accuracy by engineering an LLM-driven contextual enrichment pipeline before vectorization',
        'Delivered full-stack proof-of-concept AI agent using FastAPI and React to enable multi-turn, session-based conversations',
        'Led a team of 3 to configure 12 pricing models for 2 AI products in Oracle BRM to simulate scalable SaaS billing',
        'Built Tableau dashboards to visualize key revenue KPIs from configured product offerings for managers and stakeholders'
      ],
    }
  ];

  return (
    <section id="experience" className="py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <Typography variant="headline-lg" className="text-theme-cloudy mb-12 drop-shadow-md text-center md:text-left">
          Experience
        </Typography>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <Typography variant="headline-md" className="text-theme-cloudy font-bold drop-shadow-md">
                    {exp.role}
                  </Typography>
                  <Typography variant="body-lg" className="text-theme-cloudy font-bold mt-1 drop-shadow-md">
                    {exp.company}
                  </Typography>
                </div>
                <Typography variant="label-md" className="text-theme-cloudy/80 mt-2 md:mt-0 font-bold">
                  {exp.date}
                </Typography>
              </div>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-theme-cloudy marker:text-lg">
                {exp.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>
                    <Typography variant="body-md" className="text-theme-cloudy/90 font-semibold">
                      {bullet}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

