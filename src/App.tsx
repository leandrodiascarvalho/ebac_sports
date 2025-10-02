import React from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
        <Cart />
      </div>
    </>
  )
}

export default App
