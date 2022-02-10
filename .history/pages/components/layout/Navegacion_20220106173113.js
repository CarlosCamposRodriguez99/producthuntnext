import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Nav = styled.nav`
    
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