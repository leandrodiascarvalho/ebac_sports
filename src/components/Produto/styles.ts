import styled from 'styled-components'
import { cores } from '../../styles'

export const Produto = styled.div`
  border: 1px solid ${cores.cinza};
  padding: 8px;
  border-radius: 8px;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
`

export const Capa = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }
`

export const Prices = styled.div`
  margin: 16px 0;
  color: ${cores.branca};

  strong {
    font-size: 18px;
  }
`

export const BtnComprar = styled.button`
  display: block;
  width: 100%;
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
  padding: 8px 0;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    background-color: #12b891;
  }
`

