import React from 'react'
import ReactDOM from 'react-dom'
import App from './page/App'
import { AppContainer } from 'react-hot-loader'
import './styles/index.scss'

const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('app')
  )
}


render(App)

if (module.hot) {
  module.hot.accept('./page/App', () => render(App))
}