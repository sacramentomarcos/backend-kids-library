import prisma from "../lib/repository"


export class EmprestimoRepository {
    async criar(dadosEmprestimo){
        return await prisma.emprestimos.create({
            data: {...dadosEmprestimo}
        })

    }

    async deletar(idEmprestimo:number){
        return await prisma.emprestimos.delete({
            where: {
                id_emprestimo: idEmprestimo
            }
        })
    }

    // Essa função posteriormente vai para um LivrosRepository
    async statusLivro(idLivro:number){
        const livro = await prisma.emprestimos.findFirst({
            where: {
                AND: [
                { id_livro: idLivro,
                status: true }
            ]
            }
        })

        return !!livro
    }


}