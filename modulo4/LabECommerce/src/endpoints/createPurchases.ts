import { Request, Response } from "express"
import insertPurchase from "../data/insertPurchase"
import selectProduct from "../data/selectProduct"
import selectUser from "../data/selectUser"
import { PurchaseData } from "../types"

export default async function createPurchases(req: Request, res: Response) {
    try {
        const { userId, productId, quantity } = req.body

        if(!userId || !productId || !quantity) {
            throw new Error("Os valores de userId, productId e quantity devem ser passados.")
        }

        const userAlreadyExist = await selectUser(userId)

        if(!userAlreadyExist) {
            throw new Error(`Usuário com o id ${userId} não foi encontrado.`)
        }

        const productAlreadyExist = await selectProduct(productId)

        if(!productAlreadyExist) {
            throw new Error(`Produto com o id ${productId} não foi encontrado`)
        }

        const purchase: PurchaseData = {
            id: Date.now().toString(),
            userId,
            productId,
            quantity,
            totalPrice: productAlreadyExist.price * quantity
        }

        const answer = await insertPurchase(purchase)

        res.status(201).send({answer})

    } catch (error) {
        res.status(500).send({message: 'Algo errado aconteceu.'})
    }
}