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
        const emprestimos = this.emprestimoRepo.buscarTodos()
        return emprestimos
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

        // if (await this.livroEmprestado(emprestimo.idExemplar)) throw new Error('livro já emprestado');

        const emprestimoCriado = await this.emprestimoRepo.criar(emprestimo);

        return emprestimoCriado;
    }

    async proximoIdEmprestimo(){
        const dados = await this.emprestimoRepo.ultimoIdEmprestimo();
        if (!dados) throw Error('último ID não encontrado');
        return dados.id_emprestimo + 1;
    }
}