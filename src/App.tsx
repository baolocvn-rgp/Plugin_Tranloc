/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageSquare, Phone, Mail, MapPin, Instagram, Facebook, LayoutGrid } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from './constants';
import { Tab, Product } from './types';

const ProductCard: React.FC<{ product: Product, isBig?: boolean }> = ({ product, isBig }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className={`group relative overflow-hidden rounded-[20px] bg-[#121212] border border-[#222] transition-all duration-300 hover:border-[#444] ${
      isBig ? 'md:col-span-2 md:row-span-2' : ''
    }`}
  >
    <div className={`${isBig ? 'h-full w-full absolute inset-0' : 'aspect-[4/5] overflow-hidden'}`}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
      {isBig && <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />}
    </div>
    <div className={`relative p-6 ${isBig ? 'h-full flex flex-col justify-end z-10' : ''}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
          {product.category}
        </span>
        {product.price && (
          <span className="text-sm font-medium text-white">{product.price}</span>
        )}
      </div>
      <h3 className={`${isBig ? 'text-3xl' : 'text-xl'} font-light text-white mb-2`}>{product.name}</h3>
      <p className={`text-sm text-gray-400 ${isBig ? 'max-w-md' : 'line-clamp-2'} font-light leading-relaxed`}>
        {product.description}
      </p>
      <button className={`mt-6 ${isBig ? 'w-fit px-8' : 'w-full'} py-3 rounded-full border border-[#333] text-xs uppercase font-bold tracking-widest text-zinc-300 transition-all hover:bg-white hover:text-black hover:border-white`}>
        Chi tiết
      </button>
    </div>
  </motion.div>
);

const HomeTab = () => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-2 block">Premium Collection</span>
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic">
            Bộ Sưu Tập <span className="text-[#D4AF37]">Sản Phẩm</span>
          </h2>
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[280px]"
      >
        <AnimatePresence mode="popLayout">
          {PRODUCTS.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isBig={index === 0} 
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ContactTab = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Contact Info Bento Grid */}
      <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2 rounded-[20px] bg-[#121212] border border-[#222] p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white tracking-tighter uppercase italic mb-4">
            Liên Hệ <span className="text-[#D4AF37]">Người Bán</span>
          </h2>
          <p className="text-gray-400 font-light leading-relaxed max-w-xl">
            Sẵn sàng hỗ trợ và tư vấn trực tiếp 24/7. Đừng ngần ngại liên hệ với chúng tôi để nhận được những ưu đãi tốt nhất.
          </p>
        </div>

        <div className="rounded-[20px] bg-[#121212] border border-[#222] p-8 space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <Phone size={18} className="text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Hotline</p>
              <p className="text-white font-medium">0886727323</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#1a1a1a] border border-[#333]">
              <Mail size={18} className="text-[#D4AF37]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Email</p>
              <p className="text-white font-medium">Tranlocvn.tk@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] bg-[#1a1a1a] border border-[#222] p-8 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-3 rounded-2xl mb-4">
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://zalo.me/0886727323" 
              alt="Zalo QR Code"
              className="w-32 h-32"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Quét mã Zalo</p>
          <span className="text-[12px] text-[#0068ff] font-black tracking-widest mt-1">ZALO: 0886727323</span>
        </div>
      </div>

      {/* Payment Info Bento Cell */}
      <div className="col-span-12 lg:col-span-4 rounded-[20px] bg-[#121212] border border-[#222] p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold uppercase tracking-widest">Thanh Toán</h3>
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Ngân hàng</p>
              <p className="text-white font-medium">MB Bank (Quân Đội)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Số tài khoản</p>
              <p className="text-xl font-black text-[#D4AF37] tracking-wider">0886727323</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">Chủ tài khoản</p>
              <p className="text-white font-medium uppercase">TRAN VAN LOC</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#222] flex flex-col items-center">
          <div className="bg-white p-2 rounded-2xl overflow-hidden mb-4">
            <img 
              src="https://img.vietqr.io/image/mb-0886727323-compact.jpg?accountName=TRAN%20VAN%20LOC" 
              alt="VietQR MB Bank"
              className="w-full max-w-[200px] aspect-square object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center">
            Quét mã VietQR để chuyển khoản nhanh
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold tracking-tighter uppercase whitespace-nowrap">
              TRANLOC<span className="text-[#D4AF37]"> PLUGIN</span>
            </h1>
          </div>

          <div className="flex items-center gap-1 bg-[#121212] p-1 rounded-xl border border-[#222]">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all ${
                activeTab === 'home' 
                  ? 'bg-[#1a1a1a] text-white shadow-inner' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <LayoutGrid size={12} />
              Home
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all ${
                activeTab === 'contact' 
                  ? 'bg-[#1a1a1a] text-white shadow-inner' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <MessageSquare size={12} />
              Liên hệ
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HomeTab />
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ContactTab />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-[#111] py-8 mt-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold">
            @ 2026 BẢN QUỀN THUỘC VỀ T.V.L
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <Facebook size={16} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={16} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}
