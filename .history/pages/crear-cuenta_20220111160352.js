import React from 'react';
import Layout from './components/layout/Layout';


const CrearCuenta = () => (
  <div>
    <Layout>
      <>
        <h1>Crear Cuenta</h1>
        <form>
            <div>
              <label htmlFor="nombre">Nombre</label>
            </div>
        </form>
      </>
    </Layout>
  </div>
);

export default CrearCuenta;