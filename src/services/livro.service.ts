import LivroRepository from "../repositories/livro.repository"


export default class LivroService {
    private livroRepo: LivroRepository

    constructor() {
        this.livroRepo = new LivroRepository()
    }

    async buscaPorCodigoISBN(codigo: string){
        try {
            const livro = await this.livroRepo.buscarPorISBN(codigo)
            const livroTratado = {
                ...livro,
                id_livro: Number(livro?.id_livro)
            }
            return livroTratado
        } catch (e) {
            console.error('[ERRO] - ', e)
        }
        
    }

}