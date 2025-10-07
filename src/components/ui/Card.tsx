// ===================================
// src/components/ui/Card.tsx
// ===================================
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = true,
  gradient = false 
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-8 transition-all duration-300',
        gradient ? 'bg-gradient-to-br from-slate-50 to-blue-50' : 'bg-white',
        hover && 'hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};
