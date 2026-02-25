import Link from "next/link";

const ProfilePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Profile</h1>
      <p>Ini adalah halaman profile user.</p>
      
      <br />
      <Link href="/profile/edit">
        <button style={{ padding: "8px 16px", cursor: "pointer" }}>
          Edit Profile
        </button>
      </Link>
    </div>
  );
};
export default ProfilePage;