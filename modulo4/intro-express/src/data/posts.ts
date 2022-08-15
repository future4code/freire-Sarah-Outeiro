// Preferi deixar os Arrays separados pois assim posso buscar um ou outro baseado nos IDs.

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const posts: Array<Post> = [
    {
        id: 1,
        title: 'arroz e feijao',
        body: 'é fácil fazer arroz e feijão',
        userId: 1
    },    
    {
        id: 2,
        title: 'Sopa Verde',
        body: 'Sopa verde é muito bom',
        userId: 2
    },
    {
        id: 3,
        title: 'Chocolate com Castanha',
        body: 'Chocolate com Castanha na torta de sobremesa',
        userId: 3
    },
]