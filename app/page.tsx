'use client';

import { motion } from 'framer-motion';
import Scene from '../components/Scene';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-purple-500 selection:text-white font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <Scene />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />
      </div>

      {/* Navbar (Minimal) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold tracking-tighter font-display text-neon pointer-events-auto cursor-pointer"
        >
          NEANDER
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8 text-sm font-medium text-gray-300 pointer-events-auto"
        >
          <a href="#" className="hover:text-white hover:text-neon transition-colors">Menu</a>
        </motion.div>
      </nav>
    </main>
  );
}
