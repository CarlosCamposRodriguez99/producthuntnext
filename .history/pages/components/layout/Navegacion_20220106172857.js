import React from 'react';
import Link from 'next/link';
import styled

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