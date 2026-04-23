import DetailProduk from "../../views/DetailProduk";
import { ProductType } from "@/types/Product.type";
// import { retrieveData, retrieveDataByID } from "@/utils/db/servicefirebase"; 

const HalamanProduk = ({product}:{product: ProductType}) => {
  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;

export async function getServerSideProps({ params }: { params: { produk: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produk/${params?.produk}`);
  const respone = await res.json();
  
  // console.log("Data produk yang diambil dari API:", respone);
  
  return {
    props: {
      product: respone.data, 
    },
  };
}

// export async function getStaticPaths() {
//   const products = await retrieveData("products");
//
//   if (!products) {
//     return { paths: [], fallback: 'blocking' };
//   }
//
//   const paths = products.map((product: { id: string }) => ({
//     params: { produk: product.id }
//   }));
//
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export async function getStaticProps({params}:{params:{produk:string}}) {
//   const productData = await retrieveDataByID("products", params.produk);
//
//   return {
//     props: {
//       product: productData || null,
//     },
//     revalidate: 10
//   }
// }