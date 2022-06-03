import { useState, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Cliente from "../components/Cliente";

const Home = () => {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        
        const url = "http://localhost:4000/clientes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setClientes(resultado);

      } catch (error) {
        
      }
    }

    obtenerClientesApi();
  }, [])

  return (
    <div>
        <>
        <h1 className="font-black text-4xl text-blue-900">Cliente</h1>
        <p className="mt-3">Adminsitra tus clientes</p>

        <table className="w-full mt-5 table-auto shadow bg-white">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Nombre</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Empresa</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              clientes.map(cliente => (
                <Cliente 
                  key={cliente.id}
                  cliente={cliente}
                />
              ))
            }
          </tbody>
        </table>
    </>
    </div>
  )
}

export default Home