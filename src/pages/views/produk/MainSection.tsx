import styles from './produk.module.css';

const MainSection = () => {
  const products = ["Laptop Pro", "Smartphone X", "Wireless Earbuds"];

  return (
    <main className={styles.mainSection}>
      <h2 style={{ marginBottom: '20px', borderBottom: '2px solid #3498db', display: 'inline-block' }}>
        Daftar Produk Terpopuler
      </h2>
      <div className={styles.grid}>
        {products.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '600' }}>{item}</h3>
            <p style={{ color: '#3498db', fontWeight: 'bold' }}>Rp 10.000.000</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;