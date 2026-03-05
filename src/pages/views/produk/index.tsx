import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

const TampilanProduk = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, [isLogin, push]);

  if (!isLogin) return null;

  return (
    <div className="min-h-screen bg-gray-50">
        
      <HeroSection onLogout={() => setIsLogin(false)} />
      <MainSection />
    </div>
  );
};

export default TampilanProduk;