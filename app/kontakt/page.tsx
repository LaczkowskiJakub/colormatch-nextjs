'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Kontakt() {
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
          <nav className="hidden lg:flex items-center gap-3">
            <Link href="/" className="px-6 py-2 text-orange-500 text-sm font-medium hover:bg-slate-800 transition-colors rounded">
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
            <Link href="/kontakt" className="px-6 py-2 text-white text-sm font-medium hover:bg-slate-800 transition-colors rounded">
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Zawartość */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-20">
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-slate-200 font-light mb-4 text-center"
        >
          Skontaktuj się z nami
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-slate-400 text-center mb-16 max-w-2xl"
        >
          Mamy pytania? Chcesz poznać naszą ofertę? Napisz do nas!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
          
          {/* Formularz */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-[#1a1a1a] border border-slate-700/50 rounded-lg p-8"
          >
            <h2 className="text-2xl text-white font-light mb-8">Formularz kontaktowy</h2>
            
            <form className="space-y-6">
              
              <div>
                <label className="block text-sm text-slate-300 mb-2">Imię i nazwisko</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="Twoje imię"
                />
              </div>
              
              <div>
                <label className="block text-sm text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="twoj@email.pl"
                />
              </div>
              
              <div>
                <label className="block text-sm text-slate-300 mb-2">Temat</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none transition-colors"
                  placeholder="Temat wiadomości"
                />
              </div>
              
              <div>
                <label className="block text-sm text-slate-300 mb-2">Wiadomość</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-orange-600 focus:outline-none transition-colors resize-none"
                  placeholder="Twoja wiadomość..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors rounded-lg"
              >
                Wyślij wiadomość
              </button>
              
            </form>
          </motion.div>
          
          {/* Dane kontaktowe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            
            {/* Adres */}
            <div className="bg-[#1a1a1a] border border-slate-700/50 rounded-lg p-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2">Adres</h3>
                  <p className="text-slate-300">ul. Wąbrzeska 41</p>
                  <p className="text-slate-300">85-144 Bydgoszcz</p>
                  <p className="text-slate-300">Polska</p>
                </div>
              </div>
            </div>
            
            {/* Telefon */}
            <div className="bg-[#1a1a1a] border border-slate-700/50 rounded-lg p-8">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2">Telefon</h3>
                  <a href="tel:+48724909099" className="text-slate-300 hover:text-white transition-colors block">
                    +48 724 909 099
                  </a>
                  <p className="text-slate-500 text-sm mt-2">Poniedziałek - Piątek: 7:30 - 15:30</p>
                </div>
              </div>
            </div>
            
            {/* Email */}
            <div className="bg-[#1a1a1a] border border-slate-700/50 rounded-lg p-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-medium mb-2">Email</h3>
                  <a href="mailto:biuro@paintcoat.pl" className="text-slate-300 hover:text-white transition-colors">
                    biuro@paintcoat.pl
                  </a>
                </div>
              </div>
            </div>
            
          </motion.div>
          
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-32 bg-[#1a1a1a] border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-8 py-12">
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            
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
            
            <div>
              <h4 className="text-white font-medium mb-4 tracking-wide">NAWIGACJA</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <Link href="/" className="block hover:text-white transition-colors">
                  Strona główna
                </Link>
                <Link href="/colormatch" className="block hover:text-white transition-colors">
                  ColorMatch
                </Link>
                <Link href="/dla-kogo" className="block hover:text-white transition-colors">
                  Dla kogo
                </Link>
                <Link href="/realizacje" className="block hover:text-white transition-colors">
                  Realizacje
                </Link>
                <Link href="/kontakt" className="block hover:text-white transition-colors">
                  Kontakt
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4 tracking-wide">O NAS</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                20+ lat doświadczenia w branży lakierów przemysłowych. Bezpośredni dystrybutor Lankwitzer w Polsce.
              </p>
            </div>
            
          </div>
          
          <div className="pt-8 border-t border-slate-700/50 text-center text-sm text-slate-500">
            © 2025 Paint Coat Consulting sp. z o.o. | Wszystkie prawa zastrzeżone
          </div>
          
        </div>
      </footer>
    </div>
  );
}