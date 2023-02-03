import i18next from './i18n'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import SwitchRoutes from './router/routes'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}></I18nextProvider>
      <BrowserRouter>
        <SwitchRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
