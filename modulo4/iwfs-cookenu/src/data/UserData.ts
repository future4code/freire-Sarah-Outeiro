import { BaseDataBase } from "./BaseDataBase"
import User from "../model/User"
import { UserDB } from "../model/User"

class UserData extends BaseDataBase {

    private static tableName = 'usuario_cookenu'

    async getUserByEmail(email: string): Promise<User | undefined> {
        const result = await this.getConnection()
        .select('*')
        .from(UserData.tableName)
        .where({ email })

        if (!result.length) {
            return undefined
        }

        return new User(
            result[0].id, 
            result[0].nome, 
            result[0].email, 
            result[0].senha
            )
    }

    async getUserById(id: string): Promise<UserDB | undefined> {

        const result = await this.getConnection()
            .select("*")
            .from(UserData.tableName)
            .where({ id })

        if(!result.length) {
            return undefined
        }

        const user: UserDB = {
            id: result[0].id,
            nome: result[0].nome,
            email: result[0].email
        }

        return user
    }

    async createUser(user: User): Promise<string> {

        await this.getConnection().insert({
            id: user.getId(),
            email: user.getEmail(),
            nome: user.getNome(),
            senha: user.getSenha()
        }).into(UserData.tableName)
        
        return `usuario cadastrado com sucesso`
    }
}

export default UserData