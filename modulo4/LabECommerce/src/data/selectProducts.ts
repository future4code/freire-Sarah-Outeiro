import { ProductData } from "../types";
import { connection } from "./connection"

const typeProduct = (product: any) => {

    const createProduct: ProductData = {
        id: product.id,
        name: product.name,
        price: product.price,
        image_url: product.image_url
    }

    return createProduct
}

export default async function selectProducts(): Promise<ProductData[] | undefined> {

    const result = await connection("labecommerce_products")

    const allProductType = result.map((product) => {
        return typeProduct(product)
    })

    return allProductType
}