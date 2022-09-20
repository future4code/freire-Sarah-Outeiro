import HashManager from "../services/HashManager"
import Authenticator from "../services/Authenticator"
import { Request, Response} from "express"

class UserEndpoint {

    async create(req: Request, res: Response) {

    }

    async login(req: Request, res: Response) {

    }

    async getProfile(req: Request, res: Response) {
        try {

            const token = req.headers.authorization
            
            if(!token) {
                throw new Error("O token deve ser passado")
            }

            const id = new Authenticator().getTokenData(token)

            const userData = new UserData

            const user = 

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message})
        }
    }
}

export default UserEndpoint