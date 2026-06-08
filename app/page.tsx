'use client';

import { motion } from 'framer-motion';
import { Palette, Wrench, Factory, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
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
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
{/* Paint Splash Image */}
        <motion.div
          className="absolute left-50 top-50 opacity-30 pointer-events-none w-126 h-126"
          style={{ transform: 'translate(-100px, -100px)' }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/paint-splash.png"
            alt="Paint splash"
            fill
            className="object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Image 
            src="/xLogoPAINTCOATGROUP-1.webp" 
            alt="Paint Coat Group" 
            width={200} 
            height={200}
            className="mx-auto mb-8"
          />
          
          <h1 className="text-5xl md:text-6xl text-white font-light mb-6 leading-tight">
            PAINT COAT<br/>
            <span className="text-orange-500">CONSULTING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
            Dystrybutor lakierów przemysłowych Lankwitzer
          </p>
          
          <p className="text-slate-400 max-w-2xl mx-auto">
            Od 2005 roku specjalizujemy się w profesjonalnym doborze lakierów dla przemysłu ciężkiego
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link href="/colormatch">
            <button className="group flex items-center gap-2 px-8 py-3 bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 transition-colors">
              Wypróbuj ColorMatch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          
          <Link href="/kontakt">
            <button className="px-8 py-3 text-slate-300 text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-all">
              Skontaktuj się z nami
            </button>
          </Link>
        </motion.div>

        {/* Separator */}
        <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-20"></div>

        {/* Nasza oferta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-6xl w-full"
        >
          <h2 className="text-3xl md:text-4xl text-slate-200 font-light mb-12">
            Nasza oferta
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* ColorMatch */}
            <Link href="/colormatch">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-orange-600/50 transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 mb-6 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                  <Palette className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-white font-medium mb-3">ColorMatch Pro</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  AI-powered narzędzie do precyzyjnego dopasowania kolorów lakierów przemysłowych
                </p>
                <span className="text-orange-500 text-sm font-medium group-hover:underline">
                  Dowiedz się więcej →
                </span>
              </motion.div>
            </Link>
            
            {/* Consulting */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all"
            >
              <div className="w-16 h-16 mb-6 bg-slate-800 rounded-xl flex items-center justify-center">
                <Wrench className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl text-white font-medium mb-3">Consulting</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Profesjonalne doradztwo w doborze lakierów specjalistycznych dla Twojego projektu
              </p>
            </motion.div>
            
            {/* Produkty */}
            <Link href="https://paintcoat.pl/produkty">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 bg-[#1a1a1a] border border-slate-700/50 rounded-lg hover:border-slate-600 transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 mb-6 bg-slate-800 rounded-xl flex items-center justify-center">
                  <Factory className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl text-white font-medium mb-3">Produkty Lankwitzer</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Szeroka gama lakierów przemysłowych najwyższej jakości
                </p>
                <span className="text-orange-500 text-sm font-medium group-hover:underline">
                  Zobacz katalog →
                </span>
              </motion.div>
            </Link>
            
          </div>
        </motion.div>
      </div>

{/* Separator */}
      <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-20"></div>

     {/* O nas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-20 max-w-6xl w-full px-4 mx-auto"
      >
        <h2 className="text-3xl md:text-4xl text-slate-200 font-light mb-8">
          Kim jesteśmy?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          <div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Paint Coat Consulting to firma o bogatej historii, która sięga 2005 roku. Przez ponad dwie dekady 
              specjalizujemy się w dystrybucji lakierów przemysłowych najwyższej jakości.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Jesteśmy bezpośrednim dystrybutorem lakierów Lankwitzer - producenta o światowej reputacji. 
              Nasze doświadczenie pozwala nam oferować profesjonalne wsparcie w doborze lakierów specjalistycznych 
              dla przemysłu ciężkiego, zastosowań warsztatowych i aplikacji półprofesjonalnych.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Naszą misją jest zapewnienie najwyższej jakości produktów i usług naszym klientom z całej Polski.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-[#1a1a1a] border border-slate-700/50 rounded-lg text-center">
              <div className="text-4xl font-light text-orange-500 mb-2">20+</div>
              <div className="text-sm text-slate-400">Lat doświadczenia</div>
            </div>
            <div className="p-6 bg-[#1a1a1a] border border-slate-700/50 rounded-lg text-center">
              <div className="text-4xl font-light text-orange-500 mb-2">520+</div>
              <div className="text-sm text-slate-400">Kolorów w bazie</div>
            </div>
            <div className="p-6 bg-[#1a1a1a] border border-slate-700/50 rounded-lg text-center">
              <div className="text-4xl font-light text-orange-500 mb-2">99%</div>
              <div className="text-sm text-slate-400">Zadowolenie klientów</div>
            </div>
          </div>
          
        </div>
      </motion.div>

      {/* Separator */}
      <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-20"></div>

     {/* Lankwitzer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="my-20 max-w-6xl w-full px-4 mx-auto"
      >
        <div className="bg-[#1a1a1a] border border-slate-700/50 rounded-lg p-12">
          
          <h2 className="text-3xl md:text-4xl text-slate-200 font-light mb-6">
            Nasz partner: Lankwitzer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            <div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Lankwitzer to światowy producent lakierów przemysłowych o ponad 70-letniej tradycji. 
                Jako bezpośredni dystrybutor, zapewniamy dostęp do pełnej gamy ich produktów.
              </p>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Ich lakiery są stosowane w:
              </p>
              <ul className="text-slate-300 space-y-2 ml-4">
                <li>✓ Przemyśle kolejowym</li>
                <li>✓ Automotive i transporcie</li>
                <li>✓ Metalurgii i hutnictwie</li>
                <li>✓ Ochronie antykorozyjnej</li>
                <li>✓ Aplikacjach specjalistycznych</li>
              </ul>
            </div>
            
            <div className="p-8 bg-slate-900/50 rounded-lg border border-slate-700/30">
              <p className="text-orange-500 font-medium mb-2">Certyfikaty i standardy:</p>
              <div className="space-y-2 text-sm text-slate-400">
                <p>• ISO 9001:2015</p>
                <p>• ISO 14001:2015</p>
                <p>• Zgodne z REACH</p>
                <p>• Lakiery bezpieczne dla środowiska</p>
                <p>• Gwarancja jakości</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </motion.div>

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