import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { EmprestimoService } from "../services/emprestimo.service";
import { EmprestimoEntity } from "../entities/emprestimo.entity";
import { emprestimoSchema } from "../schemas/emprestimo.schema";

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
            const body = request.body
            
        }
    }

    async buscaProximoIdEmprestimo(request:FastifyRequest, reply:FastifyReply){
        try {
            const id = await this.service.proximoIdEmprestimo();
            return { id }
        } catch (e) {
            console.error(e)
        }
    }
}