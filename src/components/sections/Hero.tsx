// ===================================
// src/components/sections/Hero.tsx
// ===================================
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="pt-25 pb-10 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <Badge>🚀 Innovation Éducative Camerounaise</Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              L'éducation par{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SMS
              </span>
              {' '}pour tous
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Malloum démocratise l'accès à l'intelligence artificielle éducative via SMS, 
              permettant à chaque élève, même sans Internet, d'accéder à un tuteur IA personnalisé.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/features">
                <Button size="lg">
                  <span>Découvrir Malloum</span>
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  En savoir plus
                </Button>
              </Link>
            </div>

            {/* Stats rapides */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-600">Élèves</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">500+</div>
                <div className="text-sm text-gray-600">Écoles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

         {/* Image côté droit */}
        <div className="relative">
          <div className="absolute inset-0  blur-3xl opacity-0"></div>
          <div className="relative p-8 overflow-hidden">
            <div className=" relative  overflow-hidden">
              {/* Image de fond */}
              <img 
                src="/images/malloum-architecture1.png" 
                alt="Malloum - Éducation par SMS"
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};