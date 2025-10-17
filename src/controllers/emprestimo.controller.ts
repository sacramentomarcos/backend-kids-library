import fastify, { FastifyRequest, FastifyReply } from "fastify";
import { EmprestimoService } from "../services/emprestimo.service";
import { EmprestimoEntity } from "../entities/emprestimo.entity";
import { EmprestimoDTO } from "../dto/emprestimo.dto";
import { EmprestimoMapper } from "../mappers/emprestimo.mapper";


export class EmprestimoController {
    private service: EmprestimoService;

    constructor(){
        this.service = new EmprestimoService();
    }

    async criar(request:FastifyRequest<{ Body: EmprestimoDTO }>, reply:FastifyReply){
        try {
            const dadosEmprestimo = EmprestimoMapper.paraEntidade(request.body)
            const resultado = await this.service.criaEmprestimo(dadosEmprestimo)
            return reply.code(201).send(resultado)
        } catch (e:any) {
            console.error(e)
            reply.code(400).send({message:e.message})
        }
    }
}