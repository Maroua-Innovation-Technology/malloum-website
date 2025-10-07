// ===================================
// src/components/ui/PageHero.tsx
// ===================================
import React from 'react';
import { Badge } from './Badge';

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  gradient?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  gradient = 'from-blue-600 to-indigo-600',
}) => {
  return (
    <section className={`pt-32 pb-20 px-4 bg-gradient-to-br ${gradient} text-white`}>
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {badge && (
          <Badge className="bg-white/20 text-white">{badge}</Badge>
        )}
        <h1 className="text-5xl md:text-6xl font-bold">
          {title}
        </h1>
        <p className="text-xl text-blue-100">
          {subtitle}
        </p>
      </div>
    </section>
  );
};