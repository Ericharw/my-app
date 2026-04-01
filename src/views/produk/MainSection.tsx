import styles from './produk.module.css';
import ProductCard from './cardProduk';

const MainSection = () => {
  const products = [
    { nama: "Laptop", harga: "Rp 15.000.000" },
    { nama: "Smartphone", harga: "Rp 8.500.000" },
    { nama: "Wireless Earbuds", harga: "Rp 1.200.000" }
  ];

  return (
    <main className={styles.mainSection}>
      <h1>Daftar Produk Terpopuler</h1>
      
      <div className={styles.grid}>
        
        {products.map((item, index) => (
          <ProductCard key={index} nama={item.nama} harga={item.harga} />
        ))}
      </div>
    </main>
  );
};

export default MainSection;