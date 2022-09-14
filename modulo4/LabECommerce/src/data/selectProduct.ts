import { ProductData } from "../types"
import { connection } from "./connection"

export default async function selectProduct(productid: string): Promise<ProductData| undefined> {

    const [result] = await connection('labecommerce_products').select('*').where({id: productid})

    if (result) {
        const productType: ProductData = {
            id: result.id,
            name: result.name,
            price: result.price,
            image_url: result.image_url
        }
        return productType
    } else {
        return undefined
    }
}