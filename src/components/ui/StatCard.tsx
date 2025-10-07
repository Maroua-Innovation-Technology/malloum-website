// ===================================
// src/components/ui/StatCard.tsx
// ===================================
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  value: string;
  label: string;
  gradient?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  gradient = 'from-blue-600 to-blue-400',
  className,
}) => {
  return (
    <div className={cn('text-center', className)}>
      <div
        className={cn(
          'text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2',
          gradient
        )}
      >
        {value}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};