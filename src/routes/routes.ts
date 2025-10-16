import { FastifyInstance } from "fastify";
import { EmprestimoController } from "../controllers/emprestimo.controller";

export async function emprestimoRotas(app: FastifyInstance){
    const controller = new EmprestimoController()

    app.post('/emprestimos', controller.criar.bind(controller))
}