import React from 'react';
import { css } from '@emotion/react';
import Layout from './components/layout/Layout';
import { Formulario, Campos, InputSubmit, Error } from './components/ui/Formulario';

import firebase from '../firebase';

// Validaciones
import useValidacion from './hooks/useValidacion';
import validarCrearCuenta from './hooks/validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  email: '',
  password: ''
}

const CrearCuenta = () => {

  const { valores, errores, handleChange, handleSubmit, handleBlur } = useValidacion(STATE_INICIAL, validarCrearCuenta, crearCuenta);

  const { nombre, email, password } = valores;

  function crearCuenta() {
    firebase.registrar(nombre, email, password);
    
  }


  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >Crear Cuenta</h1>
          <Formulario
            onSubmit={handleSubmit}
            noValidate        // ??
          >
              <Campos>
                  <label htmlFor="nombre">Nombre</label>
                  <input
                      type="text"
                      id="nombre"
                      placeholder="Tu Nombre"
                      name="nombre"
                      value={nombre}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campos>

              { errores.nombre && <Error>{errores.nombre}</Error> }
  
              <Campos>
                  <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      placeholder="Tu Email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campos>
              { errores.email && <Error>{errores.email}</Error> }
  
              <Campos>
                  <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      id="password"
                      placeholder="Tu Password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                  />
              </Campos>
              { errores.password && <Error>{errores.password}</Error> }
  
              <InputSubmit
                type="submit"
                value="Crear Cuenta"
              />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default CrearCuenta;















// NOTES 
// console.log('Creando cuenta...');
/// 