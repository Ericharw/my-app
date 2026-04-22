import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router' 
import { useEffect, useState } from 'react' 
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

const ChatWidgetDinamic = dynamic(() => import('../components/ChatWidget'), {
  loading: () => <p className="mt-4 text-blue-500 font-semibold"> Memuat widget chat...</p>,
  ssr: false, 
});

export default function Home() {
/* const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  if (!isLogin) return null;*/

  const [bukaChat, setBukaChat] = useState(false);

  return (
  <div className={`p-8 ${inter.className}`}> 
    <Head>
      <title>Praktikum Next.js Pages Router</title>
    </Head>
    
    <h1 className="text-4xl font-bold ">Praktikum Next.js Pages Router</h1> <br />
    <p className="text-lg">Mahasiswa D4 Pengembangan Web</p>

    <button 
      onClick={() => setBukaChat(!bukaChat)}
      className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
    >
      {bukaChat ? 'Tutup Bantuan Chat' : 'Buka Bantuan Chat'}
    </button>

    {bukaChat && <ChatWidgetDinamic />}
  </div>
  )
}