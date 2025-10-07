// ===================================
// src/components/layout/Footer.tsx
// ===================================
import React from 'react';
import Link from 'next/link';
import { Send, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SITE_NAME, COMPANY_NAME, NAV_LINKS } from '@/lib/constants';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
               <div className="relative w-10 h-10">
                             <Image
                               src="/images/logo.png"
                               alt="Malloum Logo"
                               width={40}
                               height={40}
                               className="object-contain"
                             />
                           </div>
                           
              <span className="text-2xl font-bold">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm">
              L'éducation par SMS pour tous. Innovation éducative accessible à tous les élèves du Cameroun.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Hardé, Maroua-Cameroun</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">contact@mit.cm</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+237 672 277 779</span>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/profile.php?id=61572934537559&locale=fr_FR#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/maroua-it/" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Développé par <span className="text-white font-semibold"><a href="https://mit.cm">{COMPANY_NAME}</a></span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {SITE_NAME} - {COMPANY_NAME}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};