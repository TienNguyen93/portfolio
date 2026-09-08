import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import projectsData from '../../data/projects.json';

export const Projects: React.FC = () => {
  const projects = projectsData as Array<{
    title: string;
    slug?: string;
    hasDetailPage?: boolean;
    category: string;
    tagVariant: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    description: string;
    tech: string[];
    link?: string | null;
  }>;

  return (
    <section id="projects" className="py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <Typography variant="headline-lg" className="text-theme-cloudy mb-12 drop-shadow-md text-center md:text-left">
          Projects
        </Typography>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <Card 
              key={idx} 
              className={`p-8 flex flex-col h-full ${proj.hasDetailPage ? 'cursor-pointer group' : ''}`}
              onClick={() => {
                if (proj.hasDetailPage && proj.slug) {
                  window.location.hash = `#/projects/${proj.slug}`;
                }
              }}
            >
              <Typography variant="headline-md" className={`text-theme-cloudy mb-4 font-bold drop-shadow-md ${proj.hasDetailPage ? 'group-hover:text-theme-crail transition-colors' : ''}`}>
                {proj.title}
              </Typography>
              <Typography variant="body-md" className="text-theme-cloudy/90 mb-6 flex-grow font-semibold leading-relaxed">
                {proj.description}
              </Typography>
              {proj.tech && proj.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-theme-crail text-white text-sm font-semibold rounded-md shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mt-auto">
                {proj.hasDetailPage && proj.slug && (
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.hash = `#/projects/${proj.slug}`;
                    }}
                  >
                    View Case Study &rarr;
                  </Button>
                )}
                {proj.link && (
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button variant="secondary" size="sm">
                      View Source
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
