import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './../components/Spinner';

const VerClientes = () => {

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
            }, 1500);
        }

        obtenerClienteApi();
    }, []);

    return (

        cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? "No hay resultado" : (
            <div>
                <p className='text-2xl text-gray-700 '>
                    <span className='uppercase font-bold'>Cliente: </span>
                    {cliente.nombre}
                </p>
                <p className='text-2xl text-gray-700 '>
                    <span className='uppercase font-bold'>Empresa: </span>
                    {cliente.empresa}
                </p>
                <p className='text-2xl text-gray-700 '>
                    <span className='uppercase font-bold'>Email: </span>
                    {cliente.email}
                </p>
                <p className='text-2xl text-gray-700 '>
                    <span className='uppercase font-bold'>Telefono: </span>
                    {cliente.telefono}
                </p>
                <p className='text-2xl text-gray-700 '>
                    <span className='uppercase font-bold'>Notas: </span>
                    {cliente.notas}
                </p>
            </div>
        )
    )
}

export default VerClientes