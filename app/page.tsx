'use client';

import { motion } from 'framer-motion';
import { Camera, Palette, Sparkles, Scan, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Header z logami */}
      {/* Header */}
<header className="relative z-20 border-b border-slate-700/30">
  <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
    <div className="flex items-center gap-8">
      <Image 
        src="/logo21-1.png" 
        alt="Paint Coat Logo" 
        width={160} 
        height={50}
      />
      <div className="hidden md:block w-px h-10 bg-slate-700"></div>
      <Image 
        src="/xLogoPAINTCOATGROUP-1.webp" 
        alt="Paint Coat Group Logo" 
        width={60} 
        height={60}
        className="hidden md:block"
      />
    </div>
    <nav className="hidden lg:flex items-center gap-8 text-slate-300 text-sm">
      <a href="https://paintcoat.pl" className="hover:text-orange-500 transition-colors">
        Strona główna
      </a>
      <a href="#colormatch" className="px-6 py-2.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
        ColorMatch
      </a>
    </nav>
  </div>
</header>

    {/* Zawartość */}
<div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-24 px-4">
  
  {/* Logo + Główny przekaz */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="flex items-center gap-8 md:gap-12 mb-16 max-w-5xl"
  >
    <Image 
      src="/xLogoPAINTCOATGROUP-1.webp" 
      alt="Paint Coat Group" 
      width={120} 
      height={120}
      className="flex-shrink-0"
    />
    
    <h1 className="text-2xl md:text-3xl text-slate-400 font-light leading-relaxed text-left">
      Precyzyjne dopasowanie kolorów lakierów przemysłowych
    </h1>
  </motion.div>

  {/* Przyciski CTA */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex flex-col sm:flex-row gap-4"
  >
    <button className="flex items-center gap-2 px-8 py-3.5 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium">
     <Camera className="w-5 h-5" />
     Skanuj kolor
    </button>
    
    <button className="px-8 py-3.5 bg-transparent text-slate-300 rounded-lg border border-slate-600 hover:border-orange-600 hover:text-orange-500 transition-colors font-medium">
      Katalog lakierów
    </button>
    
    <button className="px-8 py-3.5 bg-transparent text-slate-300 rounded-lg border border-slate-600 hover:border-orange-600 hover:text-orange-500 transition-colors font-medium">
      Kontakt
    </button>
  </motion.div>

{/* Jak to działa */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="mt-32 max-w-6xl w-full"
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
        <p className="text-slate-400 text-sm leading-relaxed">
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
        <p className="text-slate-400 text-sm leading-relaxed">
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
        <p className="text-slate-400 text-sm leading-relaxed">
          Dostaniesz kod produktu, cenę i szczegóły lakieru idealnie dopasowanego
        </p>
      </motion.div>
      
    </div>
  </motion.div>

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
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="relative z-10 mt-24 py-12 px-8 bg-black/80 backdrop-blur-md border-t border-orange-500/20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Image 
                src="/logo21-1.png" 
                alt="Paint Coat Logo" 
                width={150} 
                height={45}
              />
              <Image 
                src="/xLogoPAINTCOATGROUP-1.webp" 
                alt="Paint Coat Group" 
                width={60} 
                height={60}
              />
            </div>
            <p className="text-orange-300 text-sm">
              sp. z o.o.<br/>
              Dystrybutor lakierów przemysłowych
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-orange-400 tracking-wider">KONTAKT</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-orange-300">
                  ul. Wąbrzeska 41<br/>
                  85-144 Bydgoszcz
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-orange-400" />
                <a href="tel:+48724909099" className="text-orange-300 hover:text-white transition-colors">
                  +48 724 909 099
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:biuro@paintcoat.pl" className="text-orange-300 hover:text-white transition-colors">
                  biuro@paintcoat.pl
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-400 tracking-wider">LINKI</h4>
            <div className="space-y-2 text-sm">
              <a href="https://paintcoat.pl" className="block text-orange-300 hover:text-white transition-colors">
                Strona główna Paint Coat
              </a>
              <a href="https://paintcoat.pl/produkty" className="block text-orange-300 hover:text-white transition-colors">
                Katalog produktów
              </a>
              <a href="https://paintcoat.pl/kontakt" className="block text-orange-300 hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-orange-500/20 text-center text-orange-400 text-sm tracking-wide">
          © 2025 Paint Coat Consulting sp. z o.o. | Wszystkie prawa zastrzeżone
        </div>
      </motion.footer>
    </div>
  );
}