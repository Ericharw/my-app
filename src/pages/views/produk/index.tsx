import styles from "./produk.module.scss";

const TampilanProduk = ({ products }: { products: any[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>
      <div className={styles.produk__content}>
        {products.length > 0 ? (
          products.map((product: any) => (
            <div key={product.id} className={styles.produk__content__item}>
              <img src={product.image} alt={product.name} className={styles.produk__content__item__image} />
              <h4 className={styles.produk__content__item__name}>{product.name}</h4>
              <p className={styles.produk__content__item__category}>{product.category}</p>
              <p className={styles.produk__content__item__price}>Rp {product.price.toLocaleString('id-ID')}</p>
            </div>
          ))
        ) : (
          [1, 2, 3, 4].map((i) => (
            <div key={i} className={styles.produk__content__skeleton}>
              <div className={styles.produk__content__skeleton_image} />
              <div className={styles.produk__content__skeleton_name} />
              <div className={styles.produk__content__skeleton_price} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;