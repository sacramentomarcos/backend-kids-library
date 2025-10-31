import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { EmprestimoService } from "../services/emprestimo.service";
import { EmprestimoEntity } from "../entities/emprestimo.entity";

export class EmprestimoController {
    private service: EmprestimoService;

    constructor() {
        this.service = new EmprestimoService();
    }

    // async create(request:FastifyRequest, reply:FastifyReply){
    //     try {
    //         const body = request.body as {idUsuario:string, idExemplar:number}
    //         const resultado = await this.service.criaEmprestimo(body)
    //         return reply.code(201).send(resultado)
    //     } catch (e:any) {
    //         console.error(e)
    //         reply.code(400).send({message:e.message})
    //     }
    // }
    
    // async buscaPorId(request:FastifyRequest<{Params: {id: string}}>, reply:FastifyReply){
    //     try {
    //         const id = request.params.id;
    //         const dados = await this.service.buscarUsuarioPorId(id)
    //     }
    // };

    async cria(request:FastifyRequest, reply: FastifyReply) {
        try {
            const novoEmprestimo = this.service.criaEmprestimo(request.body)
            return reply.status(200).send(novoEmprestimo)
        } catch (e) {
            console.error('[ERRO] - ', e)
            return reply.status(500).send({erro: e})
        }
    }

    async buscaProximoIdEmprestimo(request:FastifyRequest, reply:FastifyReply) {
        try {
            const id = await this.service.proximoIdEmprestimo();
            return { id }
        } catch (e) {
            console.error(e)
        }
    }
}