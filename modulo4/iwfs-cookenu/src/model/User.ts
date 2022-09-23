class User{
    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private senha: string
    ){}

    getId() {
        return this.id
    }

    getNome() {
        return this.nome
    }

    getEmail() {
        return this.email
    }

    getSenha() {
        return this.senha
    }
}

export interface UserDB{
    id: string,
    nome: string,
    email: string
}

export default User