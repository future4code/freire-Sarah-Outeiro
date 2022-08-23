import express, { Request, Response } from "express"
import cors from "cors"
import { User, users } from "./data/users"

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

app.get('/users', (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const id: string = req.query.id as string
        const user: User | undefined = users.find((user) => user.id === Number(id))
        if (!user) {
            codeError = 404
            throw new Error('User not found')
        }
        res.status(200).send(user)
    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.post('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Please check the fields')
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send({users})

    } catch(error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.patch('/users', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const {id, name, email, type, age} = req.body

        if(!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Please check the fields')
        }

        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send({message: 'User created successfully'})

    } catch(error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

