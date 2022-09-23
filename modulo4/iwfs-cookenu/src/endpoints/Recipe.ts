import { Request, Response } from "express"
import RecipeData from "../data/RecipeData"
import { MissingFields } from "../error/MissingFields"
import { TokenNotPass } from "../error/TokenNotPass"
import Recipe from "../model/Recipe"
import Authenticator from "../services/Authenticator"
import IdGenerator from "../services/IdGenerator"

class RecipeEndpoint {

    async create(req: Request, res: Response){
        try {

            const token = req.headers.authorization
            const { titulo, descricao } = req.body

            if(!token || !descricao) {
                throw new MissingFields()
            }

            if(!token) {
                throw new TokenNotPass()
            }

            const id = new Authenticator().getTokenData(token)
            const idRecipe = new IdGenerator().idGenerator()
            const date = new Date()

            const recipe = new Recipe(idRecipe, titulo, descricao, date, id)

            const recipeData = new RecipeData()
            const response =  await recipeData.createRecipe(recipe)

            res.status(201).send({response})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message})
        }
    }
}

export default RecipeEndpoint