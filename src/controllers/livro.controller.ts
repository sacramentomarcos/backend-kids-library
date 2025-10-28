import { FastifyReply, FastifyRequest } from "fastify";
import LivroService from "../services/livro.service";

export default class LivroController {
    private livroService: LivroService

    constructor(){
        this.livroService = new LivroService
    }

    async buscarDadosLivro(request:FastifyRequest, reply: FastifyReply) {
        try {
            const { isbn } = request.params as {isbn?: string}
            if (!isbn) { 
                return reply.status(500).send({message:'[ERRO] - ISBN NÃO RECEBIDO'})
                }

            const dadosLivro = await this.livroService.buscaPorCodigoISBN(isbn)
            return dadosLivro
        } catch (e) {
            console.error('[ERRO] - ', e)
        }
    }



}