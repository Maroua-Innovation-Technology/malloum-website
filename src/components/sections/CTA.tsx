// ===================================
// src/components/sections/CTASection.tsx
// ===================================
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { COMPANY_NAME } from '@/lib/constants';

export const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Rejoignez la révolution éducative
        </h2>
        <p className="text-xl text-gray-600">
          Malloum est développé par {COMPANY_NAME}, une startup dédiée à l'innovation inclusive.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact">
            <Button size="lg">
              Essayer Malloum
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="secondary" size="lg">
              Nous contacter
            </Button>
          </Link>
        </div>

        {/* Partenaires 
        <div className="pt-12">
          <p className="text-gray-500 text-sm mb-6">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-gray-400">MINEDUB</div>
            <div className="text-2xl font-bold text-gray-400">MTN</div>
            <div className="text-2xl font-bold text-gray-400">Orange</div>
            <div className="text-2xl font-bold text-gray-400">UNICEF</div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};