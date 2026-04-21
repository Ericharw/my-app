import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './profile.module.css'; 

const HalamanProfile = () => {
  const { data: session }: any = useSession();
  
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    jabatan: "Admin", 
    bio: "admin baik hati dan tidak sombong",
    phone: "+62 857-6599-1971",
    location: "Indonesia",
  });

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (session?.user) {
      setFormData((prev) => ({
        ...prev,
        fullname: session.user.fullname || "",
        email: session.user.email || "",
      }));
      setImagePreview(session.user.image || "https://ui-avatars.com/api/?name=" + (session.user.fullname || "User") + "&background=random");
    }
  }, [session]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  const handleSave = () => {
    console.log("Data yang disimpan:", formData);
    setIsEditing(false);
    alert("Profil berhasil diperbarui!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.coverPhoto}></div>

        <div className={styles.profileSection}>
          <div className={styles.imageContainer}>
            {imagePreview?.startsWith('blob:') || imagePreview?.startsWith('data:') ? (
              <img src={imagePreview} alt="Profile" className={styles.profileImage} />
            ) : (
              <Image src={imagePreview || "/placeholder.png"} 
              alt="Profile" width={150} height={150} className={styles.profileImage} />
            )}
            {isEditing && (
              <label className={styles.uploadBtn}>
                Ubah
                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
              </label>
            )}
          </div>

          <div className={styles.infoSection}>
            {isEditing ? (
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Nama Lengkap</label>
                  <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Email (Read-only)</label>
                  <input type="email" name="email" value={formData.email} readOnly className={`${styles.input} ${styles.inputReadOnly}`} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Jabatan</label>
                  <input type="text" name="jabatan" value={formData.jabatan} onChange={handleChange} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Nomor Telepon</label>
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className={styles.input} />
                </div>
                <div className={styles.inputGroup}>
                  <label>Lokasi</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className={styles.input} />
                </div>
                <div className={styles.inputGroupFull}>
                  <label>Bio Singkat</label>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} className={`${styles.input} ${styles.textarea}`} />
                </div>
              </div>
            ) : (
              <div>
                <h1 className={styles.name}>{formData.fullname || "Nama Pengguna"}</h1>
                <p className={styles.role}>{formData.jabatan}</p>
                <p className={styles.bio}>"{formData.bio}"</p>
                
                <hr className={styles.divider} />
                
                <div className={styles.detailsGrid}>
                  <div><strong>Email:</strong> <br/> {formData.email}</div>
                  <div><strong>Telepon:</strong> <br/> {formData.phone}</div>
                  <div><strong>Lokasi:</strong> <br/> {formData.location}</div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.actionSection}>
            {isEditing ? (
              <>
                <button onClick={() => setIsEditing(false)} className={styles.btnCancel}>Batal</button>
                <button onClick={handleSave} className={styles.btnSave}>Simpan Perubahan</button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className={styles.btnEdit}>Edit Profil</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalamanProfile;