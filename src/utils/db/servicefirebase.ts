import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
  getDoc,
  doc,
  query,
  addDoc,
  where,
  updateDoc
} from "firebase/firestore";
import app from "./firebase";
import { add } from "firebase/firestore/pipelines";
import bcrypt from "bcrypt";

const db = getFirestore(app);
export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}
export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function signIn(
  email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  }else {

  }return null;
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
  },
  callback: Function,
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email),
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log("Query result:", data);
  if (data.length > 0) {
    // user belum ada -> boleh daftar
    // await addDoc(collection(db, "users"), userData);
    // console.log("User registered:", data);
    callback({
      status: "error",
      message: "User already exists",
    });
  } else {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const dataTersimpan = {
      email: userData.email,
      fullname: userData.fullname,
      password: hashedPassword,
      role: "member",
    };
    await addDoc(collection(db, "users"), dataTersimpan);
    callback({
      status: "success",
      message: "User registered successfully",
    });
  }
}

export async function signInWithGoogle(userData: any, callback: any) {
  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email),
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      userData.role = data[0].role;
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    } else {
      userData.role = "member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}