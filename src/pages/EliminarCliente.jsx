import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner';

const EliminarCliente = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    useEffect(() => {

        const obtenerClienteApi = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();

                setCliente(resultado);
            } catch (error) {
                alert('error');
            }

            setTimeout(() => {
                setCargando(!cargando);
            }, 500);
        }

        obtenerClienteApi();
    }, []);

    const handleDelete = async () => {

        try {
            const url = `http://localhost:4000/clientes/${cliente.id}`
            const respuesta = await fetch(url, {
                method: 'DELETE',
              });

              alert('Haz eliminado correctamente a este usuario');
              navigate("/clientes");
        } catch (error) {
            alert(error);
        }
    }

    return (
        cargando? <Spinner /> : (
            <>
      <h1 className = "font-black text-4xl text-blue-900">Estas apunto de eliminar a: {cliente.nombre}</h1>
    <div className='w-full md:flex justify-around p-5 mt-10'>
        <div>
            <button
                onClick={handleDelete}
                type='button' 
                className='py-2 px-10 text-white bg-red-600 hover:bg-red-700'>Eliminar</button>
        </div>
        <div>
            <button
                onClick={() => {
                    navigate("/clientes");
                }}
                type='button'
                className='py-2 px-10 text-white bg-yellow-600 hover:bg-yellow-700'>Cancelar</button>
        </div>
    </div>
    </>
      )
  )
}

export default EliminarCliente