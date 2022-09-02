export type UserInput = {
    name: string,
    email: string,
    password: string
}

export type UserData = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type ProductInput = {
    name: string,
    price: number,
    image_url: string
}

export type ProductData = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type PurchaseData = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}