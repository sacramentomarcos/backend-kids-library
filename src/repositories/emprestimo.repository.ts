import prisma from "../lib/repository"
import { Emprestimo } from "../entities/emprestimo.entity"

export class EmprestimoRepository {
    async criarEmprestimo(dados:Emprestimo){
        const emprestimoPrisma = {
                id_exemplar: dados.id_exemplar,
                id_livro: dados.id_livro,
                id_usuario: dados.id_usuario
            }

        return await prisma.emprestimos.create({
            data: emprestimoPrisma
        })
    }

    async deletarEmprestimo(id_emprestimo:number){
        return await prisma.emprestimos.delete({
            where: {
                id_emprestimo
            }
        })
    }
}