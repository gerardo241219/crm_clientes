import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente }) => {

    const { nombre, empresa, email, telefono, notas, id } = cliente;
    const navigate = useNavigate();

    return (
        <tr className="border hover:bg-gray-300 text-center">
            <td className="p-3">{nombre}</td>
            <td className="p-3">
                <p><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="p-3">{empresa}</td>
            <td>
                <button
                    onClick={() => {
                        navigate(`/clientes/${id}`);
                    }}
                    type="button"
                    className="bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs"
                > Ver </button>
                <button
                    onClick={() => {
                        navigate(`/clientes/editar/${id}`);
                    }}
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                > Editar </button>
                <button
                    onClick={() => {
                        navigate(`/clientes/eliminar/${id}`);
                    }}
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                > Eliminar </button>
            </td>
        </tr>
    )
}

export default Cliente