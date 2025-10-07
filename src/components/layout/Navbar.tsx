'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour vérifier si le lien est actif
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {/* Option 1: Logo PNG si disponible */}
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Malloum Logo"
                width={40}
                height={40}
                className="object-contain"
                onError={(e) => {
                  // Si l'image n'existe pas, afficher l'icône robot
                  e.currentTarget.style.display = 'none';
                  const iconContainer = e.currentTarget.parentElement?.nextElementSibling;
                  if (iconContainer) {
                    iconContainer.classList.remove('hidden');
                  }
                }}
              />
            </div>
            
            {/* Option 2: Icône Robot (fallback) */}
            <div className="hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl">
              <Bot className="w-6 h-6 text-white" />
            </div>

            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Malloum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-gray-700 hover:text-blue-600 transition-colors font-medium pb-1 ${
                  isActive(link.href) ? 'text-blue-600' : ''
                }`}
              >
                {link.label}
                {/* Soulignement pour le lien actif */}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
                )}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm">Contact</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white rounded-b-2xl shadow-lg">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 bg-blue-50 font-semibold border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};