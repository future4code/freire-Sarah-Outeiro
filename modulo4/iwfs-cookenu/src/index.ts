import { app } from './app'
import RecipeEndpoint from './endpoints/Recipe'
import UserEndpoint from './endpoints/User'

const userEndpoint = new UserEndpoint()
const recipeEndpoint = new RecipeEndpoint()

app.post('/criar-usuario', userEndpoint.create)
app.post('/login', userEndpoint.login)
app.get('/user/profile', userEndpoint.getProfile)
app.get('/user/:id', userEndpoint.getAnotherProfile)

app.post('/criar-receita', recipeEndpoint.create)