
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import AlertError from './AlertError';

const FormC = () => {

  const nuevoClienteShema = Yup.object().shape({
    nombre: Yup.string().min(3, 'Nombre incorrecto').max(20, 'El nombre es muy largo').required('Campo obligatorio'),
    empresa: Yup.string().required('Campo obligatorio'),
    email: Yup.string().email('Correo invalido').required('Campo obligatorio'),
    telefono: Yup.number().typeError('Numero invalido').integer('Numeroo no valido').positive('Numero no valido').min(8, 'Numero incorrecto').max(10, 'Numero incorrecto'),
  });

  const handleSubmit = values => {

  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 text-bold text-3xl uppercase text-center'>Agregar cliente</h1>

      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}

        onSubmit={(values) => {
          handleSubmit(values);
        }}

        validationSchema={nuevoClienteShema}
      >
        {({ errors, touched }) => (
          <Form
            className='mt-10'
          >
            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor="name">Nombre</label>
              <Field
                type="text"
                id="name"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del cliente"
                name="nombre"
              />

              {
                errors.nombre && touched.nombre && (
                  <AlertError>{errors.nombre}</AlertError>
                )
              }

            </div>

            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor="empresa">Empresa</label>
              <Field
                type="text"
                id="empresa"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Empresa del cliente"
                name="empresa"
              />

              {
                errors.empresa && touched.empresa && (
                  <AlertError>{errors.empresa}</AlertError>
                )
              }
            </div>

            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor="email">E-mail</label>
              <Field
                type="email"
                id="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email del cliente"
                name="email"
              />

              {
                errors.email && touched.email && (
                  <AlertError>{errors.email}</AlertError>
                )
              }
            </div>

            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor="telefono">Telefono</label>
              <Field
                type="tel"
                id="telefono"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Telefono del cliente"
                name="telefono"
              />

              {
                errors.telefono && touched.telefono && (
                  <AlertError>{errors.telefono}</AlertError>
                )
              }
            </div>

            <div className='mb-4'>
              <label
                className='text-gray-800'
                htmlFor="notas">Notas</label>
              <Field
                as="textarea"
                type="text"
                id="notas"
                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                placeholder="Notas del cliente"
                name="notas"
              />
            </div>

            <input
              type="submit"
              value="Agregar cliente"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"

            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormC