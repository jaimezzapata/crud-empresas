import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyCla_hssl_DDzGKOPoID2cxrlzn_Z0-HEg",
  authDomain: "crud-empresas.firebaseapp.com",
  projectId: "crud-empresas",
  storageBucket: "crud-empresas.appspot.com",
  messagingSenderId: "251982007089",
  appId: "1:251982007089:web:e85cfa07a61cf103583e10",
};

const generarId = () => {
  return Math.random() * 100 + Math.random() * 100;
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const storage = getStorage(app);

export const subirImagen = async (imagen) => {
  const refereneciaStorage = ref(storage, v4());
  await uploadBytes(refereneciaStorage, imagen);
  const urlImg = await getDownloadURL(refereneciaStorage);
  return urlImg;
};
