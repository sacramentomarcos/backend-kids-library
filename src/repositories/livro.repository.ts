import prisma from "../lib/repository"

export default class LivroRepository {
    async buscarPorISBN(isbn: string){
        const livro = await prisma.livros.findFirst({
            where: {
                isbn
            }
        })
        
    return livro
    }
}