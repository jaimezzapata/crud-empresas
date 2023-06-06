import { addDoc, collection } from "firebase/firestore";
import { dataBase, subirImagen } from "../dataFirebase/conectionFirabse";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearEmpresa = () => {
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [img, setImg] = useState("");
  const returnHome = useNavigate();

  async function agrearEmpresa() {
    const resultado = await subirImagen(img);
    const nuevaEmpresa = collection(dataBase, "empresas");
    const empresa = {
      nombre,
      ciudad,
      resultado,
    };
    await addDoc(nuevaEmpresa, empresa);
    returnHome("/listado");
  }

  // console.log(nombre)
  return (
    <form>
      <input
        placeholder="Empresa"
        onChange={(e) => setNombre(e.target.value)}
        type="text"
      />
      <input
        placeholder="Ciudad"
        onChange={(e) => setCiudad(e.target.value)}
        type="text"
      />
      <input onChange={(e) => setImg(e.target.files[0])} type="file" />
      <input onClick={agrearEmpresa} type="button" value={"Agregar Empresa"} />
    </form>
  );
};

export default CrearEmpresa;
