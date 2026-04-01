import styles from './produk.module.css';

const ProductCard = ({ nama, harga }: { nama: string; harga: string }) => {
  return (
    <div className={styles.productCard}>
      
      <div className={styles.imagePlaceholder}>
        <span className={styles.imageText}>Gambar Produk</span>
      </div>

      <h3 className={styles.productTitle}>{nama}</h3>
      <p className={styles.productPrice}>{harga}</p>

      <button className={styles.productButton}>
        Tambah ke Keranjang
      </button>

    </div>
  );
};

export default ProductCard;