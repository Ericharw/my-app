import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    push('/produk');
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <button onClick={handlerLogin}>Login</button> 
      
      <br /><br />
      <h1>Jika Belum Punya Akun Silahkan Register</h1>
      <Link href="/auth/register">
        <button type="button">Register</button>
      </Link>
    </div>
  );
};

export default halamanLogin;