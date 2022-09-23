import { BaseDataBase } from "./BaseDataBase"
import Recipe from "../model/Recipe"

class RecipeData extends BaseDataBase{

    private static TABLE_NAME = "receita_cookenu"

    async createRecipe(recipe: Recipe): Promise<string> {

        await this.getConnection().insert({
            id: recipe.getId(),
            titulo: recipe.getTitulo(),
            descricao: recipe.getDescricao(),
            data_criacao: recipe.getDataCriacao(),
            usuario_id: recipe.getUsuarioId()
        }).into(RecipeData.TABLE_NAME)

        return `Receita ${recipe.getTitulo()} criada com sucesso`
    }
}

export default RecipeData