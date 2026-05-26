import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';

export const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Software Automation Engineer Intern',
      company: 'ULimo · Part-time',
      date: 'Feb 2026 - Present',
      bullets: [
        'Scale Instagram client outreach from 1 to 10 contacts per session (900% increase) by building a Python automation bot with Map-based caching for improved lookup efficiency and Excel integration for tracking DM status and contact history',
        'Increase automated follower acquisition by 20% (25 to 30 per run) by enhancing Instagram bot to auto-dismiss confirmation panels, reducing manual intervention'
      ],
    },
    {
      role: 'Software Engineer Volunteer',
      company: 'Develop for Good',
      date: 'May 2023 - Sep 2023',
      bullets: [
        'Increased website load speed by 50% by refactoring the codebase and optimizing functions in JavaScript',
        'Improved form security and user experience by reducing invalid submissions by 20% by implementing error validation on login/signup pages using MUI components',
        'Expanded project tracking capabilities to support 4 new corporate partners by developing 5 new features in the dashboard’s history section using Next.js'
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
