import { Request, Response } from "express"
import selectProducts from "../data/selectProducts"

export default async function getProducts(req: Request, res: Response) {
    try {
        
        const allProducts = await selectProducts()

        if(!allProducts?.length) {
            throw new Error("Não há nenhum produto cadastrado!")
        }

        res.status(200).send(allProducts)

    } catch (error) {
        res.status(500).send({message: "Algo deu errado"})
    }
}