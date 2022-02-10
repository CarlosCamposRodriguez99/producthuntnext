import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled.nav`
    padding-left: 2rem;

    a {
        font-size: 1.8rem;
        margin-left: 2rem;
        color: var()
    }
`;

const Navegacion = () => {
    return ( 
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Marketplace</Link> 
            <Link href="/">Networking Web</Link>
        </nav>
    );
}

export default Navegacion;