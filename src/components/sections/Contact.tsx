import React from 'react';
import { Typography } from '../ui/Typography';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-md mx-auto text-center p-8">
          <Typography variant="headline-lg" className="text-theme-cloudy mb-8 drop-shadow-md">
            Get in Touch
          </Typography>

          <div className="flex justify-center items-center gap-8 mb-8">
            <a href="https://github.com/TienNguyen93" target="_blank" rel="noopener noreferrer" className="text-theme-cloudy hover:text-theme-cloudy transition-colors drop-shadow-md">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/tien-nguyen-t39/" target="_blank" rel="noopener noreferrer" className="text-theme-cloudy hover:text-theme-cloudy transition-colors drop-shadow-md">
              <FaLinkedin size={32} />
            </a>
          </div>

          <div className="text-theme-cloudy/90 font-medium flex flex-col gap-2">
            <p><strong>Location:</strong> Queens, NY</p>
            <p><strong>Email:</strong> <a href="mailto:nguyentien9933@gmail.com" className="hover:underline">nguyentien9933@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:3476306707" className="hover:underline">347-630-6707</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};
