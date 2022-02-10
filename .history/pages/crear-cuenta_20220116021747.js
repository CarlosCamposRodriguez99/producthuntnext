import React from 'react';
import { css } from '@emotion/react';
import Layout from './components/layout/Layout';
import { Formulario, Campos, InputSubmit } from './components/ui/Formulario';

const CrearCuenta = () => (
  <div>
    <Layout>
      <>
        <h1
          css={css`
            text-align: center;
            margin-top: 
          `}
        >Crear Cuenta</h1>
        <Formulario>
            <Campos>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    placeholder="Tu Nombre"
                    name="nombre"
                />
            </Campos>

            <Campos>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Tu Email"
                    name="email"
                />
            </Campos>

            <Campos>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Tu Password"
                    name="password"
                />
            </Campos>

            <InputSubmit
              type="submit"
              value="Crear Cuenta"
            />
        </Formulario>
      </>
    </Layout>
  </div>
);

export default CrearCuenta;