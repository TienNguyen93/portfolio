import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Claude 101',
      issuer: 'Anthropic',
      year: '2026',
      details: 'Claude Core Features, Prompt Engineering, Organization & Creation',
    },
    {
      title: 'AI Fluency Framework Foundations',
      issuer: 'Anthropic',
      year: '2026',
      details: 'AI Governance, Responsible AI, Ethics in AI, AI Adoption',
    },
    {
      title: 'AWS AI Practitioner Challenge',
      issuer: 'Udacity',
      year: '2026',
      details: 'AI & Machine Learning Foundations, Generative AI, AWS Core AI Services',
    },
    {
      title: 'Google Data Analytics',
      issuer: 'Google',
      year: '2023',
      details: 'Spreadsheets, SQL, Data Storytelling',
    },
  ];

  return (
    <section id="certifications" className="py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <Typography variant="headline-lg" className="text-theme-cloudy mb-12 drop-shadow-md text-center md:text-left">
          Certifications
        </Typography>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <Card key={idx} className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <Typography variant="headline-md" className="text-theme-cloudy font-bold drop-shadow-md">
                    {cert.title}
                  </Typography>
                  <Typography variant="label-md" className="text-theme-cloudy/80 font-bold whitespace-nowrap">
                    {cert.year}
                  </Typography>
                </div>
                <Typography variant="body-lg" className="text-theme-cloudy font-bold mb-4 drop-shadow-md">
                  {cert.issuer}
                </Typography>
                <Typography variant="body-md" className="text-theme-cloudy/90 font-semibold leading-relaxed">
                  {cert.details}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
