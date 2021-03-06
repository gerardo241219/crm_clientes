import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import NewClient from './pages/NewClient';
import EditClient from './pages/EditClient';
import VerClientes from './pages/VerClientes';
import EliminarCliente from './pages/EliminarCliente';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Grupo de Rutas -> Rutas anidadas */}
        <Route path='/clientes' element={ <Layout />}>
          <Route index element={ <Home /> } />
          <Route path='nuevo' element={ <NewClient /> } />
          <Route path='editar/:id' element={ <EditClient /> } />
          <Route path=':id' element={ <VerClientes /> } />
          <Route path='eliminar/:id' element={ <EliminarCliente /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App