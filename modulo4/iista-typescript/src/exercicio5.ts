type Usuario = {
    nome: string,
    email: string,
    role: string
}

const usuarios: Usuario[] = [
    {nome: "Rogério", email: "roger@email.com", role: "user"},
    {nome: "Ademir", email: "ademir@email.com", role: "admin"},
    {nome: "Aline", email: "aline@email.com", role: "user"},
    {nome: "Jéssica", email: "jessica@email.com", role: "user"},  
    {nome: "Adilson", email: "adilson@email.com", role: "user"},  
    {nome: "Carina", email: "carina@email.com", role: "admin"}      
] 

function retornaEmailAdmins(lista: Usuario[]): string[] {
    const usuarioFiltrado: Usuario[] = lista.filter((usuario) => {
        return usuario.role === 'admin'
    })

    const emails: string[] = usuarioFiltrado.map((usuario) => {
        return usuario.email
    })

    return emails
}

console.log(retornaEmailAdmins(usuarios))