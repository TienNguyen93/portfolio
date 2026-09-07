import React from 'react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-20 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-16 relative z-10">
        <div className="max-w-3xl">
          <Typography variant="display-lg" className="text-theme-cloudy mb-6 drop-shadow-md text-5xl md:text-7xl">
            Tien Nguyen
          </Typography>
          <Typography variant="headline-md" className="text-theme-cloudy mb-8 drop-shadow-md text-2xl md:text-3xl">
            Inspired AI/ML Engineer
          </Typography>
          <div className="mb-10 flex flex-col md:flex-row items-center md:items-end gap-12">
            <Typography variant="body-lg" className="text-theme-cloudy leading-relaxed drop-shadow-md max-w-2xl text-lg md:text-xl">
              Recent Data Science grad exploring how AI and automation can transform supply chain and operations. Currently building relevant skills through self-directed projects and eager to apply them in industry settings.
            </Typography>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="#projects">
              <Button variant="primary" size="lg">View projects</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">Contact me</Button>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">View resume</Button>
            </a>
          </div>
        </div>

        <nav className="flex flex-row md:flex-col gap-4 text-right w-full md:w-auto overflow-x-auto pb-6 md:pb-4 pt-4 md:pt-0 px-2">
          <a href="#about" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">About</a>
          <a href="#projects" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">Projects</a>
          <a href="#experience" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">Experience</a>
          <a href="#education" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">Education</a>
          <a href="#certifications" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">Certifications</a>
          <a href="#skills" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">Skills</a>
          <a href="#contact" className="font-sans text-[1.5rem] md:text-[1.7rem] text-theme-crail hover:text-theme-cloudy hover:underline underline-offset-8 decoration-4 transition-all tracking-wider drop-shadow-md whitespace-nowrap">Contact</a>
        </nav>
      </div>
    </section>
  );
};
