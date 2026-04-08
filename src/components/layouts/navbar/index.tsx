import syles from './navbar.module.css';
import { signIn, signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { data } = useSession();

  return (
    <div className={syles.navbar}>
      <div className="big">
        Navbar
      </div>
      {data ? (
        <button 
          style={{ backgroundColor: 'white', color: 'black', padding: '5px 10px', cursor: 'pointer' }} 
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      ) : (
        <button 
          style={{ backgroundColor: 'white', color: 'black', padding: '5px 10px', cursor: 'pointer' }} 
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;