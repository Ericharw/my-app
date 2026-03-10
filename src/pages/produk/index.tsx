import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = 
{
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
}

const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const { push } = useRouter();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // },[]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        //console.log("Data produk:", responsedata.data);
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
      });
  }, []);

  const handleRefresh = () => {
    setIsLoading(true); 
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        setProducts(responsedata.data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching produk:", error);
        setIsLoading(false);
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Produk</h1>
      
      <button 
        onClick={handleRefresh} 
        disabled={isLoading}
        style={{ 
          marginBottom: "15px", 
          padding: "8px 12px", 
          backgroundColor: isLoading ? "#cccccc" : "#007bff", 
          color: "white", 
          border: "none", 
          borderRadius: "4px",
          cursor: isLoading ? "wait" : "pointer"
        }}
      >
        {isLoading ? "Memuat ulang..." : "Refresh Data"}
      </button>
      
      {products.map((product: ProductType) => (
        <div 
          key={product.id} 
          style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
        >
          <h2>{product.name}</h2>
          <p>Harga: Rp{product.price}</p>
          <p>Ukuran: {product.size}</p>
          <p>Kategori: {product.category}</p>
        </div>
      ))}
    </div>
  );
};

export default kategori;