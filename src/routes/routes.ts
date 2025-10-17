import { FastifyInstance } from "fastify";
import { EmprestimoController } from "../controllers/emprestimo.controller";
import snakeToCamelCase from '../plugins/plugin-snake-to-camel'
import { emprestimoSchema } from "../schemas/emprestimo.schema";

export async function emprestimoRotas(app: FastifyInstance){
    const controller = new EmprestimoController()

    app.post('/emprestimos',
        {
            preHandler: (request, reply, done) => {
            console.log('🔍 Body recebido:', request.body);
            if (request.body) {
                request.body = snakeToCamelCase(request.body); 
            }
            done();
            },
           schema: emprestimoSchema
        },
        controller.criar.bind(controller))
    
}