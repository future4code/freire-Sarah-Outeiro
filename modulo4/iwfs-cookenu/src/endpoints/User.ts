import { Request, Response } from 'express'
import UserData from '../data/UserData'
import { MissingFields } from '../error/MissingFields'
import IdGenerator from '../services/IdGenerator'
import User from '../model/User'
import HashManager from '../services/HashManager'
import Authenticator from '../services/Authenticator'
class UserEndpoint {

    async create(req: Request, res: Response) {
        try {
            const {nome, email, senha} = req.body

            if(!nome || !email || !senha) {
                throw new MissingFields()
            }

            if(senha.length < 6) {
                throw new Error('A senha deve conter no mínimo 6 caracteres')
            }

            const userData = new UserData()

            const emailAlreadyExist = await userData.getUserByEmail(email)

            if (emailAlreadyExist) {
                throw new Error('Email já cadastrado')
            }

            const id = new IdGenerator().idGenerator()

            const hashPassword = await new HashManager().hash(senha)

            const user = new User(id, nome, email, hashPassword)

            const response = await userData.createUser(user)

            const token = new Authenticator().generateToken(id)

            res.status(201).send({message: response, token})
            
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }

    async login(req: Request, res: Response) {
        try {

            const {email, senha} = req.body

            if (!email || !senha) {
                throw new MissingFields()
            }

            const userData = new UserData()

            const userDB = await userData.getUserByEmail(email)

            if(!userDB) {
                throw new Error('Email não cadastrado na aplicação')
            }

            const correctPassword = await new HashManager().compare(senha, userDB.getSenha())

            if(!correctPassword) {
                throw new Error("A senha está incorreta")
            }

            const token = new Authenticator().generateToken(userDB.getId())
            
            res.status(200).send({message: 'Usuário logado com sucesso', token})
        } catch (error: any) {
            res.status(error.statusCode || 500).send({message: error.message})
        }
    }
}

export default UserEndpoint
