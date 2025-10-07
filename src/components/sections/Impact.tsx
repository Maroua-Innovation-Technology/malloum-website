// ===================================
// src/components/sections/ImpactSection.tsx
// ===================================
import React from 'react';
import { Users, Globe, Award, Zap } from 'lucide-react';
import { IMPACTS } from '@/lib/constants';

const iconMap = {
  Users,
  Globe,
  Award,
  Zap,
};

export const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre Impact Social
          </h2>
          <p className="text-xl text-blue-100">
            Combattre les inégalités éducatives au Cameroun
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {IMPACTS.map((impact, index) => {
            const Icon = iconMap[impact.icon as keyof typeof iconMap];
            
            return (
              <div key={index} className="flex items-start space-x-4">
                <Icon className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{impact.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{impact.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Témoignages */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                👧
              </div>
              <div>
                <div className="font-bold text-lg">Aminata S.</div>
                <div className="text-blue-200 text-sm">Élève de 3ème, Maroua</div>
              </div>
            </div>
            <p className="text-blue-100 italic">
              "Malloum m'a aidée à comprendre les mathématiques. Avant, j'avais peur de poser des questions en classe, maintenant j'ai un tuteur qui me répond à tout moment par SMS."
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                👨‍🏫
              </div>
              <div>
                <div className="font-bold text-lg">M. Ibrahim K.</div>
                <div className="text-blue-200 text-sm">Enseignant, Zone Rurale</div>
              </div>
            </div>
            <p className="text-blue-100 italic">
              "Avec Malloum, mes élèves peuvent réviser même quand ils rentrent chez eux. C'est une aide précieuse, surtout dans notre zone où les ressources sont limitées."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};