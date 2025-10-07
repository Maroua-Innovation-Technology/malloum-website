// ===================================
// src/components/features/StepCard.tsx
// ===================================
import React from 'react';
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  gradient?: string;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  number,
  title,
  description,
  gradient = 'from-blue-600 to-indigo-600',
  className,
}) => {
  return (
    <div className={cn('text-center space-y-4', className)}>
      <div
        className={cn(
          'bg-gradient-to-r w-16 h-16 rounded-full flex items-center justify-center mx-auto',
          'text-white text-2xl font-bold shadow-lg',
          gradient
        )}
      >
        {number}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
