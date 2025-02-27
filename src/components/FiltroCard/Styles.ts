import styled from 'styled-components'

type Props = {
  ativo: string
}

export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid
    ${({ theme, ativo }) =>
      ativo === 'true' ? theme.corCardAtivo : theme.corBordasCards};

  background-color: ${({ theme, ativo }) =>
    ativo === 'true' ? theme.corPrincipal : theme.corBackgroundCards};

  color: ${({ theme, ativo }) =>
    ativo === 'true' ? theme.corCardAtivo : theme.corDeTexto};

  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 140px;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
