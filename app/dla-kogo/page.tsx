'use client';

import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DlaKogo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#2f2f2f'}}>
      
    {/* Header */}
      <header className="relative z-20 bg-[#1a1a1a] border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image 
                src="/logo21-1.png" 
                alt="Paint Coat Logo" 
                width={160} 
                height={50}
              />
            </Link>
            <div className="hidden md:block w-px h-10 bg-slate-700"></div>
            <Image 
              src="/xLogoPAINTCOATGROUP-1.webp" 
              alt="Paint Coat Group Logo" 
              width={60} 
              height={60}
              className="hidden md:block"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-3">
            <Link href="/" className="px-6 py-2 text-white text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              Strona główna
            </Link>
            <Link href="/colormatch" className="px-6 py-2 text-orange-500 text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              ColorMatch
            </Link>
            <Link href="/dla-kogo" className="px-6 py-2 text-orange-500 text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              Dla kogo
            </Link>
            <Link href="/realizacje" className="px-6 py-2 text-orange-500 text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              Realizacje
            </Link>
            <Link href="/kontakt" className="px-6 py-2 text-orange-500 text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              Kontakt
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-slate-800 transition-colors rounded"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-500" />
            ) : (
              <Menu className="w-6 h-6 text-orange-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#1a1a1a] border-t border-slate-700/50 px-8 py-4 space-y-2"
          >
            <Link href="/" className="block px-4 py-2 text-white hover:bg-slate-800 transition-colors rounded">
              Strona główna
            </Link>
            <Link href="/colormatch" className="block px-4 py-2 text-orange-500 hover:bg-slate-800 transition-colors rounded">
              ColorMatch
            </Link>
            <Link href="/dla-kogo" className="block px-4 py-2 text-orange-500 hover:bg-slate-800 transition-colors rounded">
              Dla kogo
            </Link>
            <Link href="/realizacje" className="block px-4 py-2 text-orange-500 hover:bg-slate-800 transition-colors rounded">
              Realizacje
            </Link>
            <Link href="/kontakt" className="block px-4 py-2 text-orange-500 hover:bg-slate-800 transition-colors rounded">
              Kontakt
            </Link>
          </motion.nav>
        )}
      </header>

      {/* Zawartość */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-20">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-slate-200 font-light mb-6 text-center"
        >
          Dla kogo?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-center mb-16 max-w-2xl"
        >
          ColorMatch to narzędzie stworzone dla profesjonalistów z branży przemysłowej
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          
          {/* Przemysł ciężki */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🏭</span>
            </div>
            <h3 className="text-xl text-white font-medium mb-3">Przemysł ciężki</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Metalurgia, hutnictwo, przemysł maszynowy - profesjonalne lakiery dla wymagających zastosowań
            </p>
          </motion.div>
          
          {/* Lakiernie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
              <Palette className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl text-white font-medium mb-3">Lakiernie</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Profesjonalne zakłady lakiernicze - precyzyjne dopasowanie kolorów z bazy Lankwitzer
            </p>
          </motion.div>
          
          {/* Warsztaty */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🔧</span>
            </div>
            <h3 className="text-xl text-white font-medium mb-3">Warsztaty</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Serwisy i warsztaty przemysłowe - szybkie i dokładne dobieranie lakierów
            </p>
          </motion.div>
          
          {/* Transport */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">🚂</span>
            </div>
            <h3 className="text-xl text-white font-medium mb-3">Transport</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kolej, automotive, logistyka - lakiery odporne na ekstremalne warunki
            </p>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}