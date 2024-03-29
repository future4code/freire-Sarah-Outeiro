class Recipe {
    constructor(
        private id: string,
        private titulo: string,
        private descricao: string,
        private dataCriacao: Date,
        private usuarioId: string
    ){}

    getId() {
        return this.id
    }

    getTitulo() {
        return this.titulo
    }

    getDescricao() {
        return this.descricao
    }

    getDataCriacao() {
        return this.dataCriacao
    }

    getUsuarioId() {
        return this.usuarioId
    }
}

export default Recipe