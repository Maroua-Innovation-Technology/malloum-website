// ===================================
// src/components/features/FeatureCard.tsx
// ===================================
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  iconColor?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  gradient = 'from-blue-50 to-indigo-50',
  iconColor = 'bg-blue-600',
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-gradient-to-br rounded-2xl p-8 hover:shadow-xl transition-all duration-300',
        gradient,
        className
      )}
    >
      <div className={cn(
        'w-14 h-14 rounded-xl flex items-center justify-center mb-6',
        iconColor
      )}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};
