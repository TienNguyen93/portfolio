import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'PostgreSQL', 'JavaScript', 'TypeScript'],
      variant: 'warning' as const,
    },
    {
      category: 'Frameworks & Tools',
      skills: [
        'LangGraph',
        'RAG',
        'pgvector',
        'ChromaDB',
        'Ollama',
        'Gemini',
        'PySpark',
        'Databricks',
        'Tableau',
        'Docker',
        'n8n',
      ],
      variant: 'default' as const,
    },
    {
      category: 'Frontend & Backend',
      skills: ['FastAPI', 'React', 'Vercel'],
      variant: 'success' as const,
    },
  ];

  return (
    <section id="skills" className="py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <Typography variant="headline-lg" className="text-theme-cloudy mb-12 drop-shadow-md text-center md:text-left">
          Skills
        </Typography>
        <div className="flex flex-col gap-6">
          {skillCategories.map((cat, idx) => (
            <Card key={idx} className="p-8">
              <Typography variant="headline-md" className="text-theme-cloudy mb-4 font-bold drop-shadow-md">
                {cat.category}
              </Typography>
              <div className="flex flex-wrap gap-3 mt-2">
                {cat.skills.map((skill, skillIdx) => (
                  <Chip
                    key={skillIdx}
                    variant={cat.variant}
                    className="text-sm px-4 py-1.5 shadow-sm border border-theme-cloudy/20"
                  >
                    {skill}
                  </Chip>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
