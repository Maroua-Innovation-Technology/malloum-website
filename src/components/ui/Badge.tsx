// ===================================
// src/components/ui/Badge.tsx
// ===================================
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  className,
  variant = 'default' 
}) => {
  const variants = {
    default: 'bg-blue-100 text-blue-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <span
      className={cn(
        'inline-block px-4 py-2 rounded-full text-sm font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
