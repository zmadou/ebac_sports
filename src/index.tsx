import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux' // ✅ Importando Redux Provider
import { store } from './store' // ✅ Importando o store
import App from './App'
import { GlobalStyle } from './styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    {' '}
    {/* ✅ Agora reconhece a store */}
    <GlobalStyle />
    <App />
  </Provider>
)
