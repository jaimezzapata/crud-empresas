import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";
import { dataBase } from "../dataFirebase/conectionFirabse";
import { Link } from "react-router-dom";

const ListarEmpresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const empresasCollection = collection(dataBase, "empresas");

  const getEmpresas = async () => {
    const data = await getDocs(empresasCollection);
    setEmpresas(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
  };
  const eliminarEmpresa = async (id) => {
    const empresaEliminada = doc(dataBase, 'empresas', id)
    await deleteDoc(empresaEliminada)
    getEmpresas()
  }
  useEffect(() => {
    getEmpresas();
    console.log(empresas);
  }, []);
  console.log(empresas)
  return (
    <div className="cards">
      {
        empresas.map((empresa)=>(
          <section key={empresa.id}>
            <p>{empresa.id}</p>
            <h3>{empresa.nombre}</h3>
            <h3>{empresa.ciudad}</h3>
            <img src={empresa.resultado} alt="" />
            <section>
              <button onClick={()=>{eliminarEmpresa(empresa.id)}}>Eliminar</button>
              <Link to={'/editar/'+empresa.id}>Editar</Link>
            </section>
          </section>
        ))
      }
    </div>
  );
};

export default ListarEmpresas;
