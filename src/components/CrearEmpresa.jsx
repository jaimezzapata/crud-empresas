import {addDoc, collection} from 'firebase/firestore'
import { dataBase } from '../dataFirebase/conectionFirabse'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const CrearEmpresa = () => {
    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [img, setImg] = useState('')
    const returnHome = useNavigate()

    const nuevaEmpresa = collection(dataBase, 'empresas')
    async function agrearEmpresa(){
        const empresa = {
            nombre, ciudad, img
        }
        await addDoc(nuevaEmpresa,empresa)
        returnHome('/listado')
    }

    // console.log(nombre)
  return (
    <form>
        <input placeholder='Empresa' onChange={(e)=>setNombre(e.target.value)} type="text" />
        <input placeholder='Ciudad' onChange={(e)=>setCiudad(e.target.value)} type="text" />
        <input placeholder='Imagen' onChange={(e)=>setImg(e.target.value)} type="text" />
        <input onClick={agrearEmpresa} type="button" value={'Agregar Empresa'} />
    </form>
  )
}

export default CrearEmpresa