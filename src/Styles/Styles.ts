import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export default GlobalStyles

export const Container = styled.article`
  display: grid;
  grid-template-columns: 224px auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.corMain};

  ul {
    max-width: 1400px;
    @media (min-width: 1200px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
  }
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.corTitulos};
`

export const Campo = styled.input`
  padding: 8px;
  background-color: ${(props) => props.theme.corPrincipal};
  border-radius: 8px;
  font-weight: bold;
  color: ${(props) => props.theme.corSecundaria};
  border-color: ${(props) => props.theme.corSecundaria};
  width: 100%;

  &::placeholder {
    color: ${(props) => props.theme.corBordasCards};
  }
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: ${(props) => props.theme.corButtons};
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  background-color: ${(props) => props.theme.corButtonCinza};
`

export const BotaoRemover = styled(Botao)`
  background-color: ${(props) => props.theme.corVermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${(props) => props.theme.corVerde};
`
