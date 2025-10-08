import prisma from "../lib/repository"
import { Emprestimo } from "../entities/emprestimo.entity"

export class EmprestimoRepository {
    async criarEmprestimo(dados:Emprestimo){
        return await prisma.emprestimos.create({
            data: {
                
            }
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