import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import connection from './connection'

console.log("[Freire] Conectando ao banco")

const app = express()
app.use(express.json())
app.use(cors())

const server = app.listen (3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is runnig in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})

app.get('/alunos', async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM alunos_labenu
        `)
        res.status(200).send(result[0])

    } catch(error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post('/alunos', async (req, res) => {
    try {
        const result = await connection.raw(`
            INSERT INTO alunos_labenu (id, email, idade, especialidade)
            VALUES(${req.body.id},
            "${req.body.nome}",
            "${req.body.email}",
            ${req.body.idade},
            "${req.body.especialidade}"
        )
        `)
        res.status(201).send("Cadastrado com sucesso")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get('/alunosbuilder', async (req, res) => {
    try {
        const result = await connection("alunos_labenu")
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.put('/alunos/:id', async (req, res) => {
    try {
        const result = await connection("alunos_labenu")
        .update({
            nome: req.body.nome,
            email: req.body.email,
            idade: req.body.idade,
            especialidade: req.body.especialidade

        }).where ({id: req.params.id})
        res.status(200).send("Editado com sucesso")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})