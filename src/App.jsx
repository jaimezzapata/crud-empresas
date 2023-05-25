import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListarEmpresas from "./components/ListarEmpresas"
import CrearEmpresa from './components/CrearEmpresa'
import EditarEmpresa from './components/EditarEmpresa'

const router = createBrowserRouter([
  {
    path: '/listado',
    element: <ListarEmpresas />
  },
  {
    path: '/crear',
    element: <CrearEmpresa />
  },
  {
    path: '/editar',
    element: <EditarEmpresa />
  },
])

function App() {
   return (
    <>
      <RouterProvider  router={router}/>
    </>
  )
}

export default App
