'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Shield, Cpu, Palette, Sparkles, Calendar } from 'lucide-react';

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

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tighter font-display text-neon"
        >
          NEANDER
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8 text-lg font-medium text-gray-300"
        >
          <a href="#" className="hover:text-white hover:text-neon transition-colors">B2B 솔루션</a>
          <a href="#" className="hover:text-white hover:text-neon transition-colors">AC'SCENT</a>
          <a href="#" className="hover:text-white hover:text-neon transition-colors">문의하기</a>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 text-lg font-bold bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-display"
        >
          시작하기
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="px-4 py-2 text-sm font-bold text-purple-300 bg-purple-900/30 rounded-full border border-purple-700/50 font-display tracking-wider">
            새로운 비즈니스를 구현합니다
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-7xl md:text-9xl font-extrabold tracking-tight leading-tight font-display"
        >
          기술, 예술, <br />
          <span className="text-gradient text-neon">
            향기의 융합
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl text-xl md:text-2xl text-gray-300 break-keep font-light"
        >
          AI, Media Art, Event, Scent를 통한 혁신적인 감각 경험.
          네안데르는 감각의 경계를 넘어 독보적인 경험을 구현합니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <button className="group relative px-10 py-5 text-xl font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.8)] font-display">
            솔루션 보기
            <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 text-xl font-bold text-white rounded-full border-2 border-gray-700 hover:bg-gray-900 hover:border-purple-500 transition-all font-display">
            문의하기
          </button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Cpu, title: "AI Solutions", desc: "개인 이미지 분석을 통한 향기 추천 및 AI 챗봇 기반 성향 분석." },
            { icon: Palette, title: "Media Art", desc: "미디어아트 전시, 프로젝션 맵핑, 상설 전시관 운영." },
            { icon: Calendar, title: "Event Design", desc: "아티스트 팝업, 기념 이벤트 등 독창적이고 몰입감 있는 경험 설계." },
            { icon: Sparkles, title: "Scent Tech", desc: "콘서트 향 설계, 작품 기반 향 개발 및 후각적 브랜딩 구현." }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-purple-500 hover:bg-gray-900/80 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-900/20 text-purple-400 group-hover:text-white group-hover:bg-purple-600 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 text-2xl font-bold font-display group-hover:text-neon transition-all">{feature.title}</h3>
              <p className="mt-3 text-gray-400 break-keep text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
