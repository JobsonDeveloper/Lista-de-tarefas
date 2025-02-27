import { ReactNode } from 'react'
import styled from 'styled-components'

export const Botao = styled.button`
  position: fixed;
  bottom: 90px;
  right: 30px;
  padding: 5px;
  border-radius: 100%;
  border: none;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  outline: none;

  i {
    font-size: 25px;
  }
`
