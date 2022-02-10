import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const InputText = styled.input`
    border: 1px solid var(--gris3);
    padding: 1rem;
    min-width: 300px;
`;
const InputSubmit = styled.input`
`

const Buscar = () => {
    return ( 
        <form>
            <InputText type="text" />

            <button type="submit">Buscar</button>
        </form>
    );
}

export default Buscar;