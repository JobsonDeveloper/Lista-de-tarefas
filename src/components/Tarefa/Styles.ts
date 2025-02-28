import styled from 'styled-components'

export const Card = styled.article`
  background-color: ${(props) => props.theme.corBackgroundCards};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
  color: ${(props) => props.theme.corTitulos};
  cursor: pointer;
`

export const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  color: ${(props) => props.theme.corButtons};
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
  margin-right: 16px;
`

export const TagPendente = styled(Tag)`
  background-color: ${(props) => props.theme.corAmarelo};
`

export const TagConcluida = styled(Tag)`
  background-color: ${(props) => props.theme.corVerde};
`

export const TagUrgente = styled(Tag)`
  background-color: ${(props) => props.theme.corVermelho};
`

export const TagImportante = styled(Tag)`
  background-color: ${(props) => props.theme.corAmarelo2};
`

export const TagNormal = styled(Tag)`
  background-color: ${(props) => props.theme.corCinza};
`

export const Descricao = styled.textarea`
  color: ${(props) => props.theme.corTextoTarefa};
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcao = styled.article`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
