import { FastifyReply, FastifyRequest } from "fastify";
import LivroService from "../services/livro.service";

export default class LivroController {
    private livroService: LivroService

    constructor(){
        this.livroService = new LivroService
    }

    async buscarDadosLivro(request:FastifyRequest, reply: FastifyReply) {
        try {
            const { isbn } = request.params
            if (!isbn) {
                return reply.status(500).send({message:'[ERRO] - ISBN NÃO RECEBIDO'})
                }
            const dadosLivro = await this.livroService.buscaPorCodigoISBN(isbn)
            return reply.status(200).send(dadosLivro)
        } catch (e) {
            console.error('[ERRO] - ', e)
            return reply.status(500).send({message:'[ERRO] - ',e})
        }
    }
}

// import { FastifyReply, FastifyRequest } from "fastify";
// import LivroService from "../services/livro.service";

// class _LivroController {

//     private static livroService: LivroService = new LivroService

//     static async buscarDadosLivro(request:FastifyRequest<{Params:{ isbn: string}}>, reply: FastifyReply) {
//         const livroService = new LivroService
//         try {
//             const { isbn } = request.params
//             console.log(isbn)
//             if (!isbn) {
//                 return reply.status(500).send({message:'[ERRO] - ISBN NÃO RECEBIDO'})
//                 }
//             const dadosLivro = await _LivroController.livroService.buscaPorCodigoISBN(isbn)
//             return dadosLivro
//         } catch (e) {
//             console.error('[ERRO] - ', e)
//             return reply.status(500).send({message:'[ERRO] - ',e})
//         }
//     }
// }

// const LivroController = new _LivroController()

// export default LivroController