import prisma from "../lib/repository"

export default class LivroRepository {
    async buscarPorId(idLivro: number){
        const livro = await prisma.livros.findFirst({
            where: {
                id_livro: idLivro
            }
        })
    return livro
    }

    
}