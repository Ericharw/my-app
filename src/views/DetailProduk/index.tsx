// import { ProductType } from "@/types/Product.type";
import { ProductType } from "../../types/Product.type";
import Image from "next/image";
import styles from "./detailProduk/detailProduk.module.scss";

const DetailProduk = ({ products }: { products: ProductType }) => {
  return (
    <>
      <h1 className={styles.title}>Detail Produk</h1>
      <div className={styles.produkdetail}>
        <div className={styles.produkdetail__image}>
          {products.image ? (
            <Image src={products.image} alt={products.name} width={400} height={400} />
          ) : (
            <Image src="/placeholder.png" alt="No Image" width={400} height={400} />
          )}
        </div>
        
        <div className={styles.produkdetail__info}>
          <h1 className={styles.produkdetail__name}>{products.name}</h1>
          <p className={styles.produkdetail__category}>{products.category}</p>
          <p className={styles.produkdetail__price}>
            Rp {products.price && products.price.toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;