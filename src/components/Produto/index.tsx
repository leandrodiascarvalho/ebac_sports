import { useDispatch, useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../../services/api'
import * as S from './styles'
import { add } from '../../slices/cartSlice'
import { toggleFavorite } from '../../slices/favoritesSlice'
import { RootState } from '../../store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(toggleFavorite(produto))}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(add(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent

