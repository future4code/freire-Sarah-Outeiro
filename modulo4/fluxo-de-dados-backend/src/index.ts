import express from "express"
import { Product, products } from "./data/products"

const app = express()
app.use(express.json())

app.listen(3003, () => {
    console.log('servidor rodando')
})

app.get('/test', (req, res) => {
    res.send('O Servidor está funcionando!')
})

app.post('/addproduct', (req, res) => {
    try {
        if (!req.body.id || !req.body.name || !req.body.price) {
            res.status(400)
            throw new Error("Envie todas as informacoes necessarias")
        }
        if (typeof req.body.name !== typeof '') {
            res.status(400)
            throw new Error("O name deve ser uma string")
        }
        if (typeof req.body.price !== typeof 0) {
            res.status(400)
            throw new Error("O price deve ser um number")
        }
        if (Number(req.body.price) <= 0) {
            res.status(400)
            throw new Error("O price deve ser maior que 0")
        } 
        const newProduct: Product = {
            id: Math.random().toString(),
            name: req.body.name,
            price: Number(req.body.price)
        }
        
        const newProducts = products
        newProducts.push(newProduct)

        res.send(newProducts)
    } catch (error: any) {
        console.log(error.message)
    }
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.put('/updateproduct', (req, res) => {
    try {
        if (!req.body.price) {
            res.status(400)
            throw new Error("Envie todas as informacoes necessarias")
        }
        if (typeof req.body.price !== typeof 0) {
            res.status(400)
            throw new Error('O price deve ser um Number')
        }
        if (Number(req.body.price) <= 0) {
            res.status(400)
            throw new Error("O price deve ser maior que 0")
        } 
        const existInArray = products.find((product) => req.body.id === product.id)
            if (!existInArray) {
                res.status(400)
                throw new Error("Este produto não existe")
            }
        const updatedProducts = products.map((product) => {
            if (req.body.id === product.id) {
                return {
                    ...product, price: Number(req.body.price)
                }
            } else {
                return product
            }
        })
        res.send(updatedProducts)
    } catch (error: any) {
        console.log(error.message)
    }
})

app.delete('/deleteproduct', (req, res) => {
    try {
        const existInArray = products.find((product) => req.body.id === product.id)
            if (!existInArray) {
                res.status(400)
                throw new Error("Este produto não existe")
            }
        const updatedProducts = products.filter((product) => {
            return req.body.id !== product.id 
        })
        res.send(updatedProducts)
    } catch (error: any) {
        console.log(error.message)
    }
})