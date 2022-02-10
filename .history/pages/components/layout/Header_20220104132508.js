import React from 'react';
import Buscar from '../ui/Buscar';
import Navegacion from './Navegacion';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const ContenedorHeader = styled.div`
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    @media
`;

const Header = () => {
    return ( 
        <header
            css={css`
                border-bottom: 2px solid var(--gris3);
                padding: 1rem 0;
            `}
        >
            <div>
                <div>
                    <p>Mt</p>

                    <Buscar />

                    <Navegacion />
                </div>

                <div>
                    <p>Hola: Jose Carlos</p>

                    <button type="button">Cerrar Sesion</button>
                    
                    <Link href="/">Login</Link>
                    <Link href="/">Crear Cuenta</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;


























// NOTES 
{/* Esto tambien es un comentario */}
/// En la actual version de Next es import { css } from '@emotion/react'; no como el ejemplo de udemy como import { css } from '@emotion/core';
///
//