import styled from '@emotion/styled';

export const Formulario = styled.form`
    max-width: 600px;
    width: 95%;
    margin: 5rem auto 0 auto;
`;

export const Campos = styled.div`
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    label {
        flex: 0 0 150px;
        font-size: 1.8rem;
    }

    input {
        flex: 1;
        padding: 1rem;
    }
`;

export const InputSubmit = styled.input`

`;










// NOTES
// flex: 0 0 150px;
// El primer cero del flex le dice si va a crecer o no, y el segundo cero le va a decir si se va a encojer o no y el 150 dandole un width pero en flex
/// 
//