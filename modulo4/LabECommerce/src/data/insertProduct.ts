import { ProductData } from "../types"
import { connection } from "./connection"

export default async function insertProduct(insertProduct: ProductData): Promise<string> {

    const {id, name, price, image_url} = insertProduct

    await connection('labecommerce_products')
    .insert({
        id,
        name,
        price,
        image_url                                     
    })

    return `produto ${name} adicionado com sucesso!`
}