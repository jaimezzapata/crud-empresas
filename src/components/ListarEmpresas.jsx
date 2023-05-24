import React, { useState, useEffect } from "react";
import {
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { dataBase } from "../dataFirebase/conectionFirabse";

const ListarEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const empresasCollection = collection(dataBase, "empresas");

  const getEmpresas = async () => {
    const data = await getDocs(empresasCollection);
    setEmpresas(data.docs.map((doc) => ({ ...doc.data() })));
  };

  useEffect(() => {
    getEmpresas();
    console.log(empresas);
  }, []);

  return <div className="cards"></div>;
};

export default ListarEmpresas;
