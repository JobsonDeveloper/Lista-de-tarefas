import styled from 'styled-components'

export const Aside = styled.aside`
  padding: 16px;
  background-color: ${(props) => props.theme.corBackgroundAside};
  height: 100vh;

  @media (max-width: 768px) {
    height: max-content;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.corSecundaria};
  }
`

export const Filtros = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 16px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
