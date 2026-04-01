import styles from './register.module.css';
import Link from 'next/link';

const TampilanRegister = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Buat Akun Baru</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Daftar Sekarang</button>
      </form>
      <Link href="/auth/login" className={styles.link}>Sudah punya akun? Login</Link>
    </div>
  );
};

export default TampilanRegister;