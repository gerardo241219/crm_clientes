import FormC from '../components/FormC';

const NewClient = () => {
  return (
    <>
        <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
        <p className="mt-3">Llena los siguientes campos para registrar a un cliente</p>
        <FormC />
    </>
  )
}

export default NewClient