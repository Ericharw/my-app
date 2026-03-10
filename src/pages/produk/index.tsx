import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
  image: string;
};

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

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <h1 style={{ margin: 0, color: "#2d3748" }}>Daftar Produk</h1>
        <button
          onClick={handleRefresh}
          disabled={isLoading}
          style={{
            padding: "10px 16px",
            backgroundColor: isLoading ? "#cbd5e0" : "#3182ce",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: isLoading ? "wait" : "pointer",
            fontWeight: "bold",
            transition: "background-color 0.2s"
          }}
        >
          {isLoading ? "Memuat ulang..." : "Refresh Data"}
        </button>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", 
        gap: "25px" 
      }}>
        {products.map((product: ProductType) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", 
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "100%", height: "320px", backgroundColor: "#f7fafc", padding: "10px" }}>
              <img
                src={product.image || "https://via.placeholder.com/300x400?text=No+Portrait+Image"} 
                alt={product.name}
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "contain", 
                  objectPosition: "center"
                }}
              />
            </div>

            <div style={{ padding: "16px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
              <span style={{ 
                fontSize: "12px", 
                color: "#e53e3e", 
                fontWeight: "bold", 
                textTransform: "uppercase", 
                marginBottom: "8px" 
              }}>
                {product.category}
              </span>

              <h2 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#1a202c", lineHeight: "1.3" }}>
                {product.name}
              </h2>

              <p style={{ margin: "auto 0 10px 0", fontSize: "18px", fontWeight: "bold", color: "#2b6cb0" }}>
                {formatRupiah(product.price)}
              </p>

              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ 
                  backgroundColor: "#edf2f7", 
                  padding: "4px 8px", 
                  borderRadius: "4px", 
                  fontSize: "12px", 
                  color: "#4a5568",
                  fontWeight: "600"
                }}>
                  Ukuran: {product.size}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default kategori;