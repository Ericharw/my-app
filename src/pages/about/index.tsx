"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function AboutStore() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoPreview(imageUrl);
    }
  };

  const handleLogoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col ${inter.className}`}>
      
      <header className="bg-white border-b border-gray-100 py-16 text-center shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold text-gray-950 tracking-tighter mb-4">
            Tentang Ericha Store
          </h1>
          <p className="text-xl text-blue-600 font-semibold max-w-2xl mx-auto leading-normal">
            Kisah Kami, Komitmen Kami, dan Mengapa Kami Hadir untuk Anda.
          </p>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-16 space-y-20">
        
        <section className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-950 tracking-tight">
              Cerita Kami
            </h2>
            <div className="prose prose-blue prose-lg text-gray-600 leading-relaxed">
              <p>
                Selamat datang di Ericha Store! Perjalanan kami bermula dari visi Ericha Rizki untuk 
                menyederhanakan hidup melalui kurasi produk berkualitas. Kami berpusat di Malang, Jawa Timur, 
                dan hadir untuk memenuhi segala kebutuhan harian Anda dengan produk-produk pilihan yang telah 
                melalui seleksi ketat.
              </p>
              <p>
                Kami percaya bahwa belanja tidak harus menjadi beban. Oleh karena itu, kami berkomitmen 
                memberikan pelayanan prima dan pengalaman belanja yang aman, cepat, dan menyenangkan. 
                Kami selalu berinovasi untuk memberikan solusi terbaik bagi Anda, pelanggan setia kami.
              </p>
              <p className="font-semibold text-blue-600">
                &quot;Kualitas Terbaik, Belanja Lebih Mudah.&quot; - Ini adalah komitmen kami.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div 
              className="relative w-56 h-56 cursor-pointer group rounded-full overflow-hidden border-8 border-white shadow-lg"
              onClick={handleLogoClick}
              title="Klik untuk mengunggah atau mengubah Logo Toko Anda."
            >
              <div className="w-full h-full bg-blue-50 flex items-center justify-center relative">
                {logoPreview ? (
                  logoPreview.startsWith('blob:') || logoPreview.startsWith('data:') ? (
                    <img 
                      src={logoPreview} 
                      alt="Store Logo" 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <Image 
                      src={logoPreview} 
                      alt="Store Logo" 
                      width={224}
                      height={224}
                      className="w-full h-full object-cover" 
                    />
                  )
                ) : (
                  <span className="text-blue-600 text-6xl font-extrabold tracking-wider">ES</span>
                )}

                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold">Ubah Logo</span>
                </div>
              </div>
              
              <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <input 
              type="file" 
              accept="image/*" 
              ref={fileInputRef} 
              onChange={handleLogoChange} 
              className="hidden" 
            />
          </div>
        </section>

        <section className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-950 tracking-tight text-center mb-12">
            Mengapa Berbelanja di Ericha Store?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-950">Kualitas Terjamin</h3>
              <p className="text-gray-600 text-sm">Produk-produk kami telah melalui kurasi ketat untuk memastikan standar kualitas terbaik.</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-950">Pengiriman Cepat</h3>
              <p className="text-gray-600 text-sm">Kami bekerja sama dengan kurir terpercaya untuk memastikan pesanan Anda tiba tepat waktu.</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L3 21V4a2 2 0 012-2h10a2 2 0 012 2v4M7 8H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l4-4h1.414a1.994 1.994 0 001.414-.586m0 0L19 21V4a2 2 0 012-2h-10a2 2 0 01-2 2v4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-950">Layanan Pelanggan</h3>
              <p className="text-gray-600 text-sm">Tim kami siap membantu Anda dengan ramah dan responsif mengatasi segala pertanyaan.</p>
            </div>
          </div>
        </section>

        <section className="text-center bg-white p-16 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-4xl font-extrabold text-gray-950 tracking-tighter mb-4">
            Siap untuk Pengalaman Belanja yang Lebih Baik?
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
            Ayo jelajahi katalog produk kami sekarang juga dan temukan penawaran terbaik untuk kebutuhan Anda. 
            Mulai belanja Anda di Ericha Store dan rasakan kemudahannya.
          </p>
          <Link href="/produk">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition duration-300 shadow-md hover:shadow-lg text-lg"
            >
              Mulai Belanja Sekarang
            </button>
          </Link>
        </section>

      </main>

      <footer className="py-12 bg-gray-100 text-center text-sm text-gray-500 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; 2026 Ericha Store. Berpusat di Malang. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}