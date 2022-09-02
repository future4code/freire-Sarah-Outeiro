import { Request, Response } from "express"
import insertProduct from "../data/insertProduct"
import { ProductData, ProductInput } from "../types"

export default async function createProduct(req: Request, res: Response) {
    try {
        const {name, price, image_url}: ProductInput = req.body

        if(!name || !price || !image_url) {
            throw new Error("o name, price e image_url devem ser passados")
        }

        const productInsert: ProductData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const answer = await insertProduct(productInsert)

        res.status(201).send({ answer })

    } catch (error: any) {
        res.status(500).send({message: "Algo errado aconteceu"})
    }
}