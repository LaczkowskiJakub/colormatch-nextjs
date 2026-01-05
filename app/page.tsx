'use client';

import { motion } from 'framer-motion';
import { Camera, Palette, Sparkles, Scan, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-orange-950 to-black relative overflow-hidden">
      
      {/* Animowane pomarańczowe kule w tle */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-40"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Header z logami */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 py-6 px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Image 
              src="/logo21-1.png" 
              alt="Paint Coat Logo" 
              width={180} 
              height={55}
            />
            <div className="hidden md:block w-px h-12 bg-orange-500/30"></div>
            <Image 
              src="/xLogoPAINTCOATGROUP-1.webp" 
              alt="Paint Coat Group Logo" 
              width={80} 
              height={80}
              className="hidden md:block"
            />
          </div>
          <nav className="hidden lg:flex items-center gap-6 text-white">
            <a href="https://paintcoat.pl" className="hover:text-orange-400 transition-colors">
              Strona główna
            </a>
            <a href="#colormatch" className="px-6 py-2 bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
              ColorMatch
            </a>
          </nav>
        </div>
      </motion.header>

      {/* Zawartość */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-12 px-4 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-orange-500/30">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <span className="text-white font-medium tracking-wide">AI-Powered Color Matching dla Przemysłu</span>
          </div>
        </motion.div>

        {/* Główny tytuł - dopasowany do stylu logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <div className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-white mb-2">
            PAINT
          </div>
          <div className="text-5xl md:text-7xl font-bold tracking-[0.2em] mb-4">
            <span className="text-orange-500">COAT</span>
          </div>
          <motion.div
            className="text-4xl md:text-6xl font-light tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            COLORMATCH
          </motion.div>
        </motion.h1>

        {/* Podtytuł */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-orange-200 mb-3 max-w-2xl tracking-wide"
        >
          Precyzyjne dopasowanie kolorów lakierów przemysłowych
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base text-orange-300 mb-8 max-w-xl"
        >
          Profesjonalne narzędzie od Paint Coat Consulting - lidera w dystrybucji lakierów przemysłowych Lankwitzer
        </motion.p>

        {/* Przyciski CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all tracking-wide"
          >
            <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Skanuj Kolor Lakieru
            <Scan className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-bold text-lg border-2 border-orange-500/30 hover:bg-white/20 transition-all tracking-wide"
          >
            <Palette className="w-6 h-6" />
            Katalog Kolorów
          </motion.button>
        </motion.div>

        {/* Karty funkcji */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl"
        >
          {[
            { 
              icon: Camera, 
              title: 'Skanuj Kolor', 
              desc: 'Precyzyjne rozpoznawanie koloru lakieru z próbki',
              color: 'from-orange-500 to-orange-600'
            },
            { 
              icon: Sparkles, 
              title: 'AI Matching', 
              desc: 'Dopasowanie do palety Lankwitzer z dokładnością 99%',
              color: 'from-yellow-500 to-orange-500'
            },
            { 
              icon: Palette, 
              title: 'Lakiery Przemysłowe', 
              desc: 'Specjalistyczne lakiery dla przemysłu i metalurgii',
              color: 'from-orange-600 to-red-600'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-orange-500/20 hover:bg-white/10 transition-all"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-orange-200">{item.desc}</p>
            </motion.div>
          ))}
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