import { EmprestimoRepository } from "../repositories/emprestimo.repository";
import LivroRepository from "../repositories/livro.repository";
import UsuarioRepository from "../repositories/usuario.repository";
import dayjs from "dayjs";

export class EmprestimoService {
    private emprestimoRepo: EmprestimoRepository;


    constructor(){
        this.emprestimoRepo = new EmprestimoRepository;
    }

    async buscaTodosEmprestimos() {
        try {
            const emprestimos = await this.emprestimoRepo.buscarTodos()
            return emprestimos
        } catch (e) {
            console.error(e, 'service_emprestimo')
            throw e
        }
    }

    async livroEmprestado(idExemplar: number){
        console.log(idExemplar)
        const status = await this.emprestimoRepo.statusLivro(idExemplar)
        return status
    }

    async criaEmprestimo(body:any) {

        const emprestimo = {
            ...body,
        };

        const emprestimoCriado = await this.emprestimoRepo.criar(emprestimo);

        return emprestimoCriado;
    }

    async proximoIdEmprestimo(){
        const dados = await this.emprestimoRepo.ultimoIdEmprestimo();
        if (!dados) throw Error('último ID não encontrado');
        return dados.id_emprestimo + 1;
    }

    async finalizaEmprestimo(body:any) {
        const idsEmprestimos = body.emprestimos
        console.log(idsEmprestimos)
        try {
            const dados = await this.emprestimoRepo.mudaStatus(idsEmprestimos)
            return dados
        } catch (e) {
            console.error(e,'[ERRO] - service-emprestimo')
        }

    }
}