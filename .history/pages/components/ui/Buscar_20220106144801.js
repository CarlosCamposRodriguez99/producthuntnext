import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const InputText = styled.input`
    border: 1px solid var()
`;

const Buscar = () => {
    return ( 
        <form>
            <input type="text" />

            <button type="submit">Buscar</button>
        </form>
    );
}

export default Buscar;