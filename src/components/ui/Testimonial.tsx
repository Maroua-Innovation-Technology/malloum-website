// ===================================
// src/components/ui/Testimonial.tsx
// ===================================
import React from 'react';

interface TestimonialProps {
  text: string;
  author: string;
  role: string;
  avatar?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  role,
  avatar = '👤',
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
          {avatar}
        </div>
        <div>
          <div className="font-bold text-lg text-white">{author}</div>
          <div className="text-blue-200 text-sm">{role}</div>
        </div>
      </div>
      <p className="text-blue-100 italic leading-relaxed">
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
};