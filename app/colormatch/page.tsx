'use client';

import { motion } from 'framer-motion';
import { Camera, Palette, Sparkles, Scan, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
   <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#2f2f2f'}}>
      {/* Header z logami */}
      {/* Header */}
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
<div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-24 px-4">
  
{/* Logo + Główny przekaz */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex items-start gap-12 mb-16 max-w-6xl w-full"
  >
    <div className="flex-shrink-0">
      <Image 
        src="/xLogoPAINTCOATGROUP-1.webp" 
        alt="Paint Coat Group" 
        width={200} 
        height={200}
      />
    </div>
    
    <div className="flex-1 pt-8">
      <h1 className="text-3xl md:text-4xl text-slate-200 font-light leading-relaxed">
        Precyzyjne dopasowanie lakierów przemysłowych
      </h1>
    </div>
  </motion.div>

{/* Przyciski + Appka - Grid 2 kolumny */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center"
  >
    
    {/* Lewa strona - Przyciski CTA */}
    <div className="flex flex-col gap-3">
      <button className="flex items-center justify-center gap-2 px-10 py-3 bg-gray-700 text-white text-sm font-medium tracking-wide hover:bg-gray-600 transition-colors">
        <Camera className="w-4 h-4" />
        SKANUJ KOLOR
      </button>
      
      <button className="px-10 py-3 bg-transparent text-gray-300 text-sm font-medium tracking-wide border border-gray-600 hover:bg-gray-800 transition-all">
        KATALOG LAKIERÓW
      </button>
      
      <button className="px-10 py-3 bg-transparent text-gray-300 text-sm font-medium tracking-wide border border-gray-600 hover:bg-gray-800 transition-all">
        KONTAKT
      </button>
    </div>
    
    {/* Prawa strona - Reklama appki */}
  <div className="bg-[#1a1a1a] border border-slate-700/50 rounded-lg p-8 flex items-center gap-8">
      
      {/* Mockup telefonów */}
      <div className="flex-shrink-0">
        <Image 
          src="/phone-mockup.png" 
          alt="Paint Coat ColorMatch App" 
          width={180} 
          height={200}
          className="object-contain"
        />
      </div>
      
      {/* Tekst i przyciski */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold text-white mb-2">
          Paint Coat ColorMatch™ App
        </h3>
        <p className="text-sm text-slate-400 mb-6 italic">
          Instant color recommendations tailored to your project - powered by AI.
        </p>
        
        {/* Przyciski sklepów */}
        <div className="flex gap-3">
          <a href="#" className="inline-block">
            <Image 
              src="/app-store-badge.svg" 
              alt="Download on App Store" 
              width={135} 
              height={40}
            />
          </a>
          <a href="#" className="inline-block">
            <Image 
              src="/google-play-badge.png" 
              alt="Get it on Google Play" 
              width={135} 
              height={40}
            />
          </a>
        </div>
      </div>
      
    </div>
  </motion.div>

 <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-10"></div>

{/* Jak to działa */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="my-10 max-w-6xl w-full"
  >
    <h2 className="text-2xl md:text-3xl text-slate-300 font-light text-center mb-16">
      Jak to działa?
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      
      {/* Krok 1 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-20 h-20 mb-6 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-orange-600 transition-all">
          <Camera className="w-10 h-10 text-slate-400 group-hover:text-orange-500 transition-colors" />
        </div>
        <div className="text-sm text-orange-500 font-medium mb-2">KROK 1</div>
        <h3 className="text-xl text-slate-200 font-medium mb-3">Zeskanuj kolor</h3>
        <p className="text-slate-400 text-sm leading-relaxed mt-1">
          Użyj kamery telefonu lub komputera, aby zeskanować dowolny obiekt
        </p>
      </motion.div>
      
      
      {/* Krok 2 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-20 h-20 mb-6 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-orange-600 transition-all">
          <Sparkles className="w-10 h-10 text-slate-400 group-hover:text-orange-500 transition-colors" />
        </div>
        <div className="text-sm text-orange-500 font-medium mb-2">KROK 2</div>
        <h3 className="text-xl text-slate-200 font-medium mb-3">AI dopasowuje lakier</h3>
        <p className="text-slate-400 text-sm leading-relaxed mt-1">
          Algorytm analizuje kolor i znajduje najbliższe dopasowanie w bazie Lankwitzer
        </p>
      </motion.div>
      
      {/* Krok 3 */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-20 h-20 mb-6 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-orange-600 transition-all">
          <Palette className="w-10 h-10 text-slate-400 group-hover:text-orange-500 transition-colors" />
        </div>
        <div className="text-sm text-orange-500 font-medium mb-2">KROK 3</div>
        <h3 className="text-xl text-slate-200 font-medium mb-3">Otrzymaj rekomendację</h3>
        <p className="text-slate-400 text-sm leading-relaxed mt-1">
          Dostaniesz kod produktu, cenę i szczegóły lakieru idealnie dopasowanego
        </p>
      </motion.div>
      
    </div>
  </motion.div>

 <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-20"></div>


        {/* O Paint Coat z logo Group */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-24 max-w-4xl p-10 bg-white/5 backdrop-blur-md rounded-3xl border border-orange-500/20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image 
              src="/xLogoPAINTCOATGROUP-1.webp" 
              alt="Paint Coat Group" 
              width={100} 
              height={100}
            />
            <h2 className="text-3xl font-bold text-white tracking-wider">PAINT COAT CONSULTING</h2>
          </div>
          <p className="text-orange-200 text-lg mb-6">
            Od 2005 roku specjalizujemy się w dystrybucji lakierów przemysłowych Lankwitzer. 
            Jako bezpośredni dystrybutor oferujemy profesjonalne wsparcie w doborze lakierów 
            specjalistycznych dla przemysłu ciężkiego, zastosowań warsztatowych i aplikacji półprofesjonalnych.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">20 lat doświadczenia</h4>
                <p className="text-orange-300 text-sm">Fachowa wiedza od 2005 roku</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Lakiery Lankwitzer</h4>
                <p className="text-orange-300 text-sm">Oficjalny dystrybutor</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      
      
      {/* Footer */}
      <footer className="relative z-10 mt-32 bg-[#1a1a1a] border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-8 py-12">
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
            {/* Kolumna 1 - Logo */}
            <div>
              <Image 
                src="/logo21-1.png" 
                alt="Paint Coat Logo" 
                width={150} 
                height={45}
                className="mb-4"
              />
              <p className="text-slate-400 text-sm">
                Dystrybutor lakierów przemysłowych Lankwitzer
              </p>
            </div>
            
            {/* Kolumna 2 - Kontakt */}
            <div>
              <h4 className="text-white font-medium mb-4 tracking-wide">KONTAKT</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>ul. Wąbrzeska 41</p>
                <p>85-144 Bydgoszcz</p>
                <p className="pt-2">
                  <a href="tel:+48724909099" className="hover:text-white transition-colors">
                    +48 724 909 099
                  </a>
                </p>
                <p>
                  <a href="mailto:biuro@paintcoat.pl" className="hover:text-white transition-colors">
                    biuro@paintcoat.pl
                  </a>
                </p>
              </div>
            </div>
            
            {/* Kolumna 3 - Linki */}
            <div>
              <h4 className="text-white font-medium mb-4 tracking-wide">NAWIGACJA</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="https://paintcoat.pl" className="block hover:text-white transition-colors">
                  Strona główna
                </a>
                <a href="https://paintcoat.pl/produkty" className="block hover:text-white transition-colors">
                  Produkty
                </a>
                <a href="https://paintcoat.pl/kontakt" className="block hover:text-white transition-colors">
                  Kontakt
                </a>
                <a href="#colormatch" className="block hover:text-white transition-colors">
                  ColorMatch
                </a>
              </div>
            </div>
            
            {/* Kolumna 4 - O aplikacji */}
            <div>
              <h4 className="text-white font-medium mb-4 tracking-wide">COLORMATCH</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Profesjonalne narzędzie do dopasowania kolorów lakierów przemysłowych z wykorzystaniem technologii AI.
              </p>
            </div>
            
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-slate-700/50 text-center text-sm text-slate-500">
            © 2025 Paint Coat Consulting sp. z o.o. | Wszystkie prawa zastrzeżone
          </div>
          
        </div>
      </footer>
    </div>
  );
}
