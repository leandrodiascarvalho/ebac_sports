import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootState } from '../../store'
import { open } from '../../slices/cartSlice'

const Header = () => {
  const dispatch = useDispatch()
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)
  const itensFavoritos = useSelector(
    (state: RootState) => state.favorites.items
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  const abrirCarrinho = () => {
    dispatch(open())
  }

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de compras" onClick={abrirCarrinho} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
