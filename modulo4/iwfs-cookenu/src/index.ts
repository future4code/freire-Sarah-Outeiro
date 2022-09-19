import { app } from './app'
import Authenticator from './services/Authenticator'

app.get('/teste', async (req, res) => {
    const token = new Authenticator().generateToken('123')
    console.log(token)
})