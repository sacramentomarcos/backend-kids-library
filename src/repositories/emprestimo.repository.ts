import prisma from "../lib/repository"

import { EmprestimoEntity } from "../entities/emprestimo.entity"

export class EmprestimoRepository {
    async criar(dados:EmprestimoEntity){
        const emprestimoPrisma = {
                id_exemplar: dados.idExemplar,
                id_livro: dados.idLivro,
                id_usuario: dados.idUsuario,
                data_devolucao_em: dados.dataDevolucaoEm
            }

        return await prisma.emprestimos.create({
            data: emprestimoPrisma
        })
    }

    async deletar(idEmprestimo:number){
        return await prisma.emprestimos.delete({
            where: {
                id_emprestimo: idEmprestimo
            }
        })
    }

    async statusLivro(idLivro:number){
        const livro = await prisma.emprestimos.findFirst({
            where: {
                AND: [
                {id_livro: idLivro},
                {status: true}
            ]
            }
        })

        return !!livro
    }


}