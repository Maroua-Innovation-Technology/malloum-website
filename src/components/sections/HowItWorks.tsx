import React from 'react';
import { STEPS } from '@/lib/constants';

export const HowItWorks = () => {
  return (
    <section id="features" className="py-10 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment ça fonctionne ?
          </h2>
          <p className="text-xl text-gray-600">
            Un système simple et efficace en 3 étapes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, index) => {
            const gradients = [
              'from-blue-600 to-indigo-600',
              'from-indigo-600 to-purple-600',
              'from-purple-600 to-pink-600',
            ];

            return (
              <div key={index} className="text-center space-y-4">
                <div
                  className={`bg-gradient-to-r ${gradients[index]} w-16 h-16 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg`}
                >
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Diagramme visuel */}
         {/*
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Architecture de Malloum
            </h3>
            <p className="text-gray-600">
              Intégration de ChatGPT, Banque de Cours, Banque d'Examens et Machine Learning
            </p>
          </div>
          
          
          <div className="flex justify-center">
            <img 
              src="/images/malloum-architecture.png" 
              alt="Architecture de Malloum - Diagramme du fonctionnement"
              className="w-full max-w-2xl rounded-2xl"
            />
          </div>
        </div>
         */}
      </div>
    </section>
  );
};