import express from 'express'
import { toDos } from './toDos/toDos'

const app = express()
app.use(express.json())

app.listen(3003, () => {
    console.log('oi eu sou um servidor, e tou ouvindo ai se pa na porta 3003')
})

app.get('/', (req: any, res: any) => {
    res.send('pong')
})

app.get('/todos/:status', (req, res) => {
    let userRequest: boolean

    if (req.params.status === 'done') {
        userRequest = true
    }
    if (req.params.status === 'undone') {
        userRequest = false
    }

    const completed = toDos.filter((toDo) => {
        if (toDo.completed === userRequest) {
            return [toDo]
        }
    })
    res.send(completed)
})

app.get('/usertasks/:userid', (req, res) => {
    const userTasks = toDos.filter((toDo) => {
        return toDo.userId === Number(req.params.userid)
    })
    res.send(userTasks)
})

app.post('/todos', (req, res) => {
    const newToDo = {
        id: Date.now(),
        userId: req.body.userId,
        title: req.body.title,
        completed: false
    }

    const newToDos = toDos

    newToDos.push(newToDo)

    res.send(newToDos)
})

app.put('/todos', (req, res) => {
    const updatedToDos = toDos.map((toDo) => {
        if (toDo.id === req.body.id) {
            return {...toDo, completed: req.body.completed}
        } else {
            return toDo
        }
    })
    res.send(updatedToDos)
})

app.delete('/todos/:id', (req, res) => {
    const updatedToDos = toDos.filter((toDo) => {
        if (toDo.id !== Number(req.params.id)) {
            return toDo
        }
    })
    res.send(updatedToDos)
})
