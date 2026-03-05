import styles from './produk.module.css';

const HeroSection = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <section className={styles.hero}>
      <h1>Ericha Store</h1>
      <p>Temukan koleksi produk terbaru kami di sini.</p>
      <button onClick={onLogout} className={styles.btnLogout}>
        Logout dari Akun
      </button>
    </section>
  );
};

export default HeroSection;