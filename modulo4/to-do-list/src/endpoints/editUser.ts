import { Request, Response } from "express"
import updateUser from "../data/updateUser"

export default async function createUser(
    req: Request,
    res: Response
) {
    try {
        if(
            req.body.name === '' ||
            req.body.nickname === ''||
            req.body.email === ''
        ) {
            res.status(400).send({
                message: "Nenhum dos campos pode estar em branco"
            })
        }

        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({
                message: "Escolha ao menos um valor para alterar"
            })
        }

        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        res.status(400).send({
            message: "Usuário atualizado com sucesso!"
        })

    } catch (error: any) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}