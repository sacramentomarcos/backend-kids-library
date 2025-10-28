import LivroRepository from "../repositories/livro.repository"


export default class LivroService {
    private livroRepo: LivroRepository

    constructor() {
        this.livroRepo = new LivroRepository()
    }

    async buscaPorCodigoISBN(codigo: string){
        try {
            const livro = await this.livroRepo.buscarPorISBN(codigo)
            return livro
        } catch (e) {
            console.error('[ERRO] - ',e)
        }
        
    }

}