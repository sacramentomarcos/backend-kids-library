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

    async criaEmprestimo(dados: {idUsuario:string, idExemplar:number}) {
        
        // const id_livro = await this.emprestim
        const hoje = new Date()
        const diaDevolucaoPadrao = new Date(hoje)
        diaDevolucaoPadrao.setDate(hoje.getDate() + 7)
        console.log(diaDevolucaoPadrao)

        const emprestimo:EmprestimoEntity = {
                ...dados,
                dataDevolucaoEm: diaDevolucaoPadrao,
                idLivro: 3
            }

        if (await this.livroEmprestado(emprestimo.idExemplar)) throw new Error('livro já emprestado');

        const emprestimoCriado = await this.emprestimoRepo.criar(emprestimo);

        return emprestimoCriado
    }
}