import { useSession } from "next-auth/react";
import Head from "next/head";

const EditorPage = () => {
const { data: session }: any = useSession();
  return (
    <>
      <Head>
        <title>Editor Dashboard | MyApp</title>
      </Head>
      
      <div>
        <h1>Dashboard Editor</h1>
        
        <div>
          <p>
            Selamat datang, <strong>{session?.user?.fullname}</strong>!
          </p>
          <p>
            Status Akses: <span>{session?.user?.role}</span>
          </p>
        </div>
        <div>
          <h2>Manajemen Konten (Mode Editor)</h2>
          <p>Di halaman ini, editor memiliki akses eksklusif untuk:</p>
          <ul>
            <li>Menulis dan merancang artikel baru.</li>
            <li>Mengubah dan memperbaiki konten yang sudah ada.</li>
            <li>Mempublikasikan draft ke halaman utama.</li>
          </ul> 
          <button>
            + Buat Tulisan Baru
          </button>
        </div>
      </div>
    </>
  );
};
export default EditorPage;