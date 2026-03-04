import { useRouter } from "next/router";

const halamanKategori = () => {
  //const Router = useRouter();
  //console.log(Router);
  const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Kategori</h1>
      <p>Kategori: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
      
      <p> Kategori : {query.slug ? query.slug[0] : "Semua Kategori" }</p>
    </div>
  );
};

export default halamanKategori;