import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

// 1. Tambahkan import fungsi Firebase
import { retrieveData } from "@/utils/db/servicefirebase"; 

const halamanProdukStatic = (props:{products:ProductType[]}) => {
  const { products } = props;
  return (
    <div>
      <h1>Halaman Produk Static</h1>
      <TampilanProduk products={products} />
    </div>
  );
};

export default halamanProdukStatic;

export async function getStaticProps() {
  // 2. ❌ HAPUS KODE FETCH INI:
  // const res = await fetch('http://127.0.0.1:3000/api/produk');
  // const response: { data: ProductType[] } = await res.json();

  // 3. ✅ GANTI DENGAN INI: Panggil database Firebase secara langsung
  const productsData = await retrieveData("products");

  return {
    props: {
      // Kirim data ke props, pastikan memberikan fallback array kosong [] jika data null
      products: productsData || [],
    },
    revalidate: 10, // Revalidate every 10 seconds 
  }
}