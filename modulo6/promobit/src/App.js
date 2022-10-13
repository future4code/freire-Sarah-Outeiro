import Header from './components/Header/Header'
import { GlobalStyle } from './styled'
import Router from './routes/Router'

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Router/>
    </>
  )
}

export default App
