import { FastifyInstance } from "fastify";
import { EmprestimoController } from "../controllers/emprestimo.controller";
import snakeToCamelCase from '../plugins/plugin-snake-to-camel'
import { emprestimoSchema } from "../schemas/emprestimo.schema";
import UsuarioRepository from "../repositories/usuario.repository";
import UsuarioController from "../controllers/usuario.controller";


export async function emprestimosRotas(app: FastifyInstance) {
    const emprestimoController = new EmprestimoController();

    // app.post('/emprestimos',
    //     {
    //         preHandler: (request, reply, done) => {
    //         console.log('🔍 Body recebido:', request.body);
    //         if (request.body) {
    //             request.body = snakeToCamelCase(request.body); 
    //         };
    //         done();
    //         },
    //        schema: emprestimoSchema
    //     },
    //     emprestimoController.create.bind(emprestimoController))

    app.get('/emprestimos/atual', emprestimoController.buscaProximoIdEmprestimo.bind(emprestimoController))
    app.get('/emprestimos', (req, reply)=>{
        reply.send({message:'laele bora bill'})
    })
    
}

export async function usuariosRotas(app: FastifyInstance) {
    const usuarioController = new UsuarioController();
    app.get('/usuarios', usuarioController.busca.bind(usuarioController))
    
}