import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { paraReal } from '../Produto'
import { close, remove } from '../../slices/cartSlice'

import * as S from './styles'
import lixeira from '../../assets/lixeira.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, item) => {
      return (acumulador += item.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.imagem} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{paraReal(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    type="button"
                    title="Remover do carrinho"
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.Quantity>{items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {paraReal(getTotalPrice())}
            </S.Prices>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart

