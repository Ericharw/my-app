"use client";

import Link from "next/link";
import { useRouter } from "next/navigation"; // Diperbaiki: menggunakan next/navigation untuk App Router
// import styles from './login.module.scss'; // Bisa dimatikan karena kita akan full pakai Tailwind

const TampilanLogin = () => {
  const { push } = useRouter();

  // Mengubah menjadi form event agar bisa ditekan tombol "Enter" di keyboard
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Mencegah halaman ke-refresh bawaan form HTML
    push('/produk');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      
      {/* Container Card Login */}
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        
        {/* Header Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-950 mb-2">Selamat Datang</h1>
          <p className="text-gray-500 text-sm">Masuk ke akun Ericha Store Anda</p>
        </div>

        {/* Form Login (Email & Password) */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email
            </label>
            <input 
              type="email" 
              placeholder="nama@email.com" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
              required 
            />
          </div>

          {/* Lupa Password & Ingat Saya */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500" />
              <span className="text-gray-600 font-medium">Ingat saya</span>
            </label>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition">
              Lupa password?
            </a>
          </div>

          {/* Tombol Login Utama */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg mt-2"
          >
            Masuk
          </button>
        </form>

        {/* Garis Pemisah (Divider) */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">Atau</span>
          </div>
        </div>

        {/* Tombol Register / Daftar */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">Belum punya akun Ericha Store?</p>
          <Link href="/auth/register" className="block">
            <button 
              type="button" 
              className="w-full bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-4 rounded-xl transition duration-300"
            >
              Daftar Sekarang
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default TampilanLogin;