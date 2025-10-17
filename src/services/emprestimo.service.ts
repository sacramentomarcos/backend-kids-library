import { EmprestimoRepository } from "../repositories/emprestimo.repository";
import { EmprestimoEntity } from "../entities/emprestimo.entity";

export class EmprestimoService {
    private repository: EmprestimoRepository;

    constructor(){
        this.repository = new EmprestimoRepository
    }

    async livroEmprestado({ idExemplar } : EmprestimoEntity){
        console.log(idExemplar)
        const status = await this.repository.statusLivro(idExemplar)
        return status
    }

    async criaEmprestimo(emprestimo:EmprestimoEntity) {
        
        if (await this.livroEmprestado(emprestimo)) throw new Error('livro já emprestado');
        const hoje = new Date()
        const diaDevolucaoPadrao = new Date(hoje)
        diaDevolucaoPadrao.setDate(hoje.getDate() + 7)
        console.log(diaDevolucaoPadrao)

        const emprestimoPrisma = {
                id_exemplar: emprestimo.idExemplar,
                id_usuario: emprestimo.idUsuario,
                data_devolucao_em: diaDevolucaoPadrao,
                id_livro: 3
            }

        const emprestimoCriado = await this.repository.criar(emprestimoPrisma);

        return emprestimoCriado
    }
}