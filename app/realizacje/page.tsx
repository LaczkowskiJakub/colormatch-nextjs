'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Realizacje() {
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
          Nasze realizacje
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-center mb-16 max-w-2xl"
        >
          Profesjonalne lakierowanie przemysłowe dla wiodących firm w branży
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          
          {/* Projekt 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Projekt 1</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-white font-medium mb-2">Przemysł kolejowy</h3>
                <p className="text-slate-300 text-sm">Lakierowanie taboru - PESA Bydgoszcz</p>
              </div>
            </div>
          </motion.div>
          
          {/* Projekt 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Projekt 2</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-white font-medium mb-2">Metalurgia</h3>
                <p className="text-slate-300 text-sm">Konstrukcje stalowe - ochrona antykorozyjna</p>
              </div>
            </div>
          </motion.div>
          
          {/* Projekt 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Projekt 3</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-white font-medium mb-2">Automotive</h3>
                <p className="text-slate-300 text-sm">Części samochodowe - powłoki specjalistyczne</p>
              </div>
            </div>
          </motion.div>

          {/* Projekt 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Projekt 4</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-white font-medium mb-2">Maszyny przemysłowe</h3>
                <p className="text-slate-300 text-sm">Lakierowanie urządzeń produkcyjnych</p>
              </div>
            </div>
          </motion.div>

          {/* Projekt 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Projekt 5</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-white font-medium mb-2">Infrastruktura</h3>
                <p className="text-slate-300 text-sm">Elementy mostów i konstrukcji</p>
              </div>
            </div>
          </motion.div>

          {/* Projekt 6 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group relative overflow-hidden rounded-lg bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Projekt 6</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 w-full">
                <h3 className="text-white font-medium mb-2">Energia</h3>
                <p className="text-slate-300 text-sm">Turbiny i urządzenia energetyczne</p>
              </div>
            </div>
          </motion.div>
          
        </div>

        <p className="text-slate-500 text-sm mt-12 text-center">
          * Placeholdery - zastąp własnymi zdjęciami projektów
        </p>
      </div>
    </div>
  );
}