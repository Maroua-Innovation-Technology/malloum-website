// src/components/sections/AboutSection.tsx
// ===================================
import React from 'react';
import { Smartphone, BookOpen, Zap } from 'lucide-react';
import { FEATURES } from '@/lib/constants';

const iconMap = {
  Smartphone,
  BookOpen,
  Zap,
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qu'est-ce que Malloum ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une solution révolutionnaire développée par Maroua Innovation Technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            const gradients = [
              'from-blue-50 to-indigo-50',
              'from-indigo-50 to-purple-50',
              'from-purple-50 to-pink-50',
            ];
            const iconColors = ['bg-blue-600', 'bg-indigo-600', 'bg-purple-600'];

            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradients[index]} p-8 rounded-2xl hover:shadow-xl transition-all`}
              >
                <div className={`${iconColors[index]} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Section additionnelle */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold">
              Une innovation qui change des vies
            </h3>
            <p className="text-xl text-blue-100">
              Malloum représente une avancée majeure dans l'éducation inclusive au Cameroun. 
              En utilisant la technologie SMS, nous permettons à tous les élèves, 
              quelle que soit leur situation géographique ou économique, d'accéder à un soutien éducatif de qualité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
