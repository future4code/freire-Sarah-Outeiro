import Header from './components/Header/Header'
import Router from './routes/Router'
import { GlobalStyle } from './styled'

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
