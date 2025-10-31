import { EmprestimoRepository } from "../repositories/emprestimo.repository";
import { EmprestimoEntity } from "../entities/emprestimo.entity";
import LivroRepository from "../repositories/livro.repository";
import UsuarioRepository from "../repositories/usuario.repository";

export class EmprestimoService {
    private emprestimoRepo: EmprestimoRepository;
    private livroRepo: LivroRepository;
    private usuarioRepo: UsuarioRepository;

    constructor(){
        this.emprestimoRepo = new EmprestimoRepository;
        this.livroRepo = new LivroRepository();
        this.usuarioRepo = new UsuarioRepository();
    }

    async livroEmprestado(idExemplar: number){
        console.log(idExemplar)
        const status = await this.emprestimoRepo.statusLivro(idExemplar)
        return status
    }

    async criaEmprestimo(body:any) {

        const emprestimo:EmprestimoEntity = {...body}
        
        console.log(emprestimo)

        // if (await this.livroEmprestado(emprestimo.idExemplar)) throw new Error('livro já emprestado');

        const emprestimoCriado = await this.emprestimoRepo.criar(emprestimo);

        return emprestimoCriado;
    }

    async proximoIdEmprestimo(){
        const dados = await this.emprestimoRepo.ultimoIdEmprestimo()
        if (!dados) throw Error('último ID não encontrado')
        return dados.id_emprestimo + 1
    }
}