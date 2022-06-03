import FormC from '../components/FormC';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const EditClient = () => {

  const { id } = useParams();
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  useEffect(() => {

    const obtenerClienteApi = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setCliente(resultado);
      } catch (error) {
        alert('error');
      }

      setTimeout(() => {
        setCargando(!cargando);
      }, 1500);
    }

    obtenerClienteApi();
  }, []);

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editando cliente</h1>
      <p className="mt-3">Utiliza este formualrio para editar datos de un cliente</p>

      {cliente?.nombre ? (
        <FormC
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p className='p-3 bg-red-600 text-center text-white mt-5'>Cliente ID no valido</p>}
    </>
  )
}

export default EditClient