// ===================================
// src/components/features/ImpactCard.tsx
// ===================================
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const ImpactCard: React.FC<ImpactCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={`flex items-start space-x-4 ${className || ''}`}>
      <Icon className="w-8 h-8 flex-shrink-0 mt-1 text-white" />
      <div>
        <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-blue-100 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};