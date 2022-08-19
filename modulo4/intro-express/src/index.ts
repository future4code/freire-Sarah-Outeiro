import express from 'express'
import cors from 'cors'
import { users } from './data/users'
import { posts } from './data/posts'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3939, () => {
    console.log('oi eu sou um servidor, e tou ouvindo ai se pa na porta 3939')
})

app.get('/', (req, res) => {
    res.send("Hello from Express")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/posts/:id', (req, res) => {
    const userPosts = posts.filter((post) => {
        return post.userId === Number(req.params.id)
    })
    res.send(userPosts)
})