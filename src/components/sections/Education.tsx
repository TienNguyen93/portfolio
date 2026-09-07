import React from 'react';
import { Typography } from '../ui/Typography';
import { Card } from '../ui/Card';

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: 'Master of Science in Data Science',
      gpa: 'GPA: 3.75/4.0',
      institution: 'CUNY Graduate Center',
      location: 'New York, NY',
      date: 'December 2025',
      coursework: 'Artificial Intelligence, Machine Learning, Data Mining, Big Data Analysis, Natural Language Processing, Audio Processing, Data Visualization, Computational Biology and Bioinformatics',
    },
    {
      degree: 'Bachelor of Arts in Computer Science',
      institution: 'Hunter College',
      location: 'New York, NY',
      date: 'May 2023',
    },
  ];

  return (
    <section id="education" className="py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <Typography variant="headline-lg" className="text-theme-cloudy mb-12 drop-shadow-md text-center md:text-left">
          Education
        </Typography>
        <div className="flex flex-col gap-6">
          {educationList.map((edu, idx) => (
            <Card key={idx} className="p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <Typography variant="headline-md" className="text-theme-cloudy font-bold drop-shadow-md">
                    {edu.degree} {edu.gpa ? `| ${edu.gpa}` : ''}
                  </Typography>
                  <Typography variant="body-lg" className="text-theme-cloudy font-bold mt-1 drop-shadow-md">
                    {edu.institution} · {edu.location}
                  </Typography>
                </div>
                <Typography variant="label-md" className="text-theme-cloudy/80 mt-2 md:mt-0 font-bold">
                  {edu.date}
                </Typography>
              </div>
              {edu.coursework && (
                <div className="mt-4">
                  <Typography variant="body-md" className="text-theme-cloudy/90 font-semibold">
                    <span className="font-bold text-theme-cloudy">Coursework: </span>
                    {edu.coursework}
                  </Typography>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
