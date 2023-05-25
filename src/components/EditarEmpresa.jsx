import { updateDoc, collection, doc } from 'firebase/firestore'
import {useNavigate, useParams} from 'react-router-dom'
import { dataBase } from '../dataFirebase/conectionFirabse'
import { useState } from 'react'

const EditarEmpresa = () => {
    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [img, setImg] = useState('')
    const returnHome = useNavigate()
    const {id} = useParams()

    const editarEmpresa = async(id) => {
        const empresaEditada = doc(dataBase, 'empresa', id)
        const empresa = {
            nombre, ciudad, img
        }
        await updateDoc(empresaEditada,empresa)
        returnHome('/listado')
    }

    const getEmpresaId = async() => {

    }

  return (
    <form>
        <input value={nombre} placeholder='Empresa' onChange={(e)=>setNombre(e.target.value)} type="text" />
        <input value={ciudad} placeholder='Ciudad' onChange={(e)=>setCiudad(e.target.value)} type="text" />
        <input value={img} placeholder='Imagen' onChange={(e)=>setImg(e.target.value)} type="text" />
        <input onClick={editarEmpresa} type="button" value={'Agregar Empresa'} />
    </form>
  )
}

export default EditarEmpresa