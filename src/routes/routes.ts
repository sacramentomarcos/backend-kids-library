import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { EmprestimoController } from "../controllers/emprestimo.controller";
import UsuarioController from "../controllers/usuario.controller";
import LivroController from "../controllers/livro.controller";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";


export async function emprestimosRotas(app: FastifyInstance) {
    const emprestimoController = new EmprestimoController();
    app.post('/emprestimos', emprestimoController.cria.bind(emprestimoController))
    app.get('/emprestimos/atual', emprestimoController.buscaProximoIdEmprestimo.bind(emprestimoController))
}

export async function usuariosRotas(app: FastifyInstance) {
    const usuarioController = new UsuarioController();
    app.get('/usuarios', usuarioController.busca.bind(usuarioController))
}

export async function livrosRotas(app:FastifyInstance){

    const livroController = new LivroController();
    app.get('/livros/:isbn',{
        
    },
        livroController.buscarDadosLivro.bind(livroController))
    
}