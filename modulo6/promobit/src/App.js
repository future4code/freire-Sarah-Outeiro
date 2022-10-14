import Header from './components/Header/Header'
import { GlobalStyle } from './styled'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
