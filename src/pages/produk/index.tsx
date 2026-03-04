import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
  // Ubah menjadi true agar tidak langsung redirect ke login
  const [isLogin, setIsLogin] = useState(true); 
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]); 
  if (!isLogin) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Navbar Component</h1>
      <p>Produk User Page</p>
      <button onClick={() => setIsLogin(false)}>Logout </button>
    </div>
  );
};

export default Produk;