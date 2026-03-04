import Link from "next/link";

const halamanRegister = () => {
  return (
    <div>
      <h1>Halaman Register</h1>
         <p>Jika sudah punya akun, silahkan login</p>
      <Link href="/auth/login">
        <button type="button">Login</button>
      </Link>
      
    </div>
  );
};

export default halamanRegister;