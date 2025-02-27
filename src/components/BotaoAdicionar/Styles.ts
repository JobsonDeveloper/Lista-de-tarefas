import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  display: flex;
  height: 50px;
  width: 50px;
  background-color: ${(props) => props.theme.corVerde};
  color: ${(props) => props.theme.corPrincipal};
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 100%;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  font-size: 30px;
`
