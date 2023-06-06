import { updateDoc, collection, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { dataBase, subirImagen } from "../dataFirebase/conectionFirabse";
import { useEffect, useState } from "react";

const EditarEmpresa = () => {
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [img, setImg] = useState("");
  const returnHome = useNavigate();
  const { id } = useParams();

  const editarEmpresa = async () => {
    const resultado = await subirImagen(img);
    const empresaEditada = doc(dataBase, "empresas", id);
    const empresa = {
      nombre,
      ciudad,
      resultado,
    };
    await updateDoc(empresaEditada, empresa);
    returnHome("/listado");
  };

  const getEmpresaId = async (id) => {
    const empresaActualizada = await getDoc(doc(dataBase, "empresas", id));
    setNombre(empresaActualizada.data().nombre);
    setCiudad(empresaActualizada.data().ciudad);
    setImg(empresaActualizada.data().img);
  };

 useEffect(()=> {
  getEmpresaId(id)
 }, [])

  return (
    <form>
      <input
        value={nombre}
        placeholder="Empresa"
        onChange={(e) => setNombre(e.target.value)}
        type="text"
      />
      <input
        value={ciudad}
        placeholder="Ciudad"
        onChange={(e) => setCiudad(e.target.value)}
        type="text"
      />
      <input onChange={(e) => setImg(e.target.files[0])} type="file" />
      <input onClick={editarEmpresa} type="button" value={"Agregar Empresa"} />
    </form>
  );
};

export default EditarEmpresa;
