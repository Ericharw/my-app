import fetcher from "@/utils/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduk from "../../views/DetailProduk";
import { ProductType } from "@/types/Product.type";
import { retrieveData, retrieveDataByID } from "@/utils/db/servicefirebase";

const HalamanProduk = ({product}:{product: ProductType}) => {
  // const Router = useRouter();
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.produk}`,
  //   fetcher,
  // );
  // return (
  //   <div>
  //     <DetailProduk products={isLoading ? [] : data.data} />
  //   </div>
  // );

  return (
    <div>
      <DetailProduk products={product} />
    </div>
  );
};

export default HalamanProduk;
// export async function getServerSideProps({ params }: { params: { produk: string } }) {
//   ...
// }

export async function getStaticPaths() {
  const products = await retrieveData("products");

  if (!products) {
    return { paths: [], fallback: 'blocking' };
  }

  const paths = products.map((product: { id: string }) => ({
    params: { produk: product.id }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({params}:{params:{produk:string}}) {
  const productData = await retrieveDataByID("products", params.produk);

  return {
    props: {
      product: productData || null,
    },
    revalidate: 10
  }
}