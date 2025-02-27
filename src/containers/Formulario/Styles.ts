import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.corSecundaria};

  textarea {
    resize: none;
    margin: 16px 0;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 15px;
    margin-left: 5px;
  }

  div {
    display: flex;
    gap: 10px;
  }
`

export const Opcao = styled.div`
  display: flex;
  text-transform: capitalize;
`
