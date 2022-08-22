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
        const name: string = req.query.name as string
        const user: User | undefined = users.find((user) => user.name === name)
        if (!user) {
            codeError = 404
            throw new Error('User not found')
        }
        res.status(200).send(user)
    } catch(error: any) {
        res.status(codeError).send({message: error.message})
    }
})

app.get('/', (req, res) => {
    res.send('oi')
})