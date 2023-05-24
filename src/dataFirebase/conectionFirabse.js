import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCla_hssl_DDzGKOPoID2cxrlzn_Z0-HEg",
  authDomain: "crud-empresas.firebaseapp.com",
  projectId: "crud-empresas",
  storageBucket: "crud-empresas.appspot.com",
  messagingSenderId: "251982007089",
  appId: "1:251982007089:web:e85cfa07a61cf103583e10"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)

