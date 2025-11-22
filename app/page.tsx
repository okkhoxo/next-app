'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden selection:bg-purple-500 selection:text-white font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold tracking-tighter font-display text-neon"
        >
          네오<span className="text-purple-500">버스</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8 text-lg font-medium text-gray-300"
        >
          <a href="#" className="hover:text-white hover:text-neon transition-colors">기능</a>
          <a href="#" className="hover:text-white hover:text-neon transition-colors">가격</a>
          <a href="#" className="hover:text-white hover:text-neon transition-colors">소개</a>
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
            v2.0 정식 출시
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-7xl md:text-9xl font-extrabold tracking-tight leading-tight font-display"
        >
          불가능을 <br />
          <span className="text-gradient text-neon">
            현실로
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl text-xl md:text-2xl text-gray-300 break-keep font-light"
        >
          최첨단 플랫폼으로 웹 개발의 미래를 경험하세요.
          빠르고, 안전하며, 압도적으로 아름답습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <button className="group relative px-10 py-5 text-xl font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.8)] font-display">
            무료로 시작하기
            <ArrowRight className="inline-block ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-5 text-xl font-bold text-white rounded-full border-2 border-gray-700 hover:bg-gray-900 hover:border-purple-500 transition-all font-display">
            문서 보기
          </button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "압도적인 속도", desc: "엣지 컴퓨팅 기술로 최적화된 성능을 제공합니다." },
            { icon: Shield, title: "철통같은 보안", desc: "엔터프라이즈급 데이터 보호 시스템을 갖췄습니다." },
            { icon: Globe, title: "글로벌 스케일", desc: "전 세계 35개 이상의 리전에 즉시 배포하세요." }
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
