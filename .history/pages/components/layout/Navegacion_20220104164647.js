import React from 'react';
import Link from 'next/link'; 

const Navegacion = () => {
    return ( 
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Marke</Link> 
            <Link href="/">Nuevo Producto</Link>
        </nav>
    );
}

export default Navegacion;