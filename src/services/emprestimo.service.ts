import { EmprestimoRepository } from "../repositories/emprestimo.repository";
import { EmprestimoEntity } from "../entities/emprestimo.entity";

export class EmprestimoService {
    private repository: EmprestimoRepository;

    constructor(){
        this.repository = new EmprestimoRepository
    }

    async livroEmprestado({ idLivro } : EmprestimoEntity){
        console.log(idLivro)
        const emprestado = await this.repository.statusLivro(idLivro)
        return emprestado
    }

    async criaEmprestimo(emprestimo:EmprestimoEntity){
        if (await this.livroEmprestado(emprestimo)) throw new Error('livro já emprestado');

        const emprestimoCriado = await this.repository.criar(emprestimo);
        const hoje = new Date()
        const timestampDevolucao = hoje.setDate(hoje.getDate() + 7).toString()
        
        const diaDevolucaoPadrao = new Date(timestampDevolucao)

        return emprestimoCriado
    }

}