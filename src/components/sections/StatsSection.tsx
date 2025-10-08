// ===================================
// src/components/sections/StatsSection.tsx
// ===================================
import React from 'react';
import { STATS } from '@/lib/constants';

export const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Malloum en Chiffres
          </h2>
          <p className="text-xl text-gray-600">
            Notre impact sur l'éducation au Cameroun
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => {
            const colors = [
              'from-blue-600 to-blue-400',
              'from-indigo-600 to-indigo-400',
              'from-purple-600 to-purple-400',
              'from-pink-600 to-pink-400',
            ];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};