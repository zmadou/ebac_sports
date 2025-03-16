import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from './store'
import { favoritar } from './store/reducers/favoritos'
import { adicionar } from './store/reducers/carrinho'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const carrinho = useSelector((state: RootReducer) => state.carrinho.itens)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        console.log('Produtos carregados:', res) // 🛠 Debug do fetch
        setProdutos(res)
      })
      .catch((err) => console.error('Erro ao buscar produtos:', err))
  }, [])

  console.log('Favoritos do Redux:', favoritos) // 🛠 Debug do Redux
  console.log('Carrinho do Redux:', carrinho) // 🛠 Debug do Redux

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function favoritarProduto(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarProduto}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
