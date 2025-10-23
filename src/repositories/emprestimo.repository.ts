import { EmprestimoEntity } from '../entities/emprestimo.entity'
import prisma from '../lib/repository'


export class EmprestimoRepository {
    async criar(dados:EmprestimoEntity){
        return await prisma.emprestimos.create({
            data: {
                id_exemplar: dados.idExemplar,
                id_livro: dados.idLivro,
                id_usuario: dados.idUsuario,
                data_devolucao_em: dados.dataDevolucaoEm
            }
        });
    };

    async deletar(idEmprestimo: number){
        return await prisma.emprestimos.delete({
            where: {
                id_emprestimo: idEmprestimo
            }
        });
    };

    // Essa função posteriormente vai para um LivrosRepository
    async statusLivro(idLivro: number){
        const livro = await prisma.emprestimos.findFirst({
            where: 
                { id_livro: idLivro,
                status: true }
        });

        return !!livro;
    }

    async ultimoIdEmprestimo(){
        const id_emprestimo = prisma.emprestimos.findFirst({
            select: {id_emprestimo : true},
            orderBy: {id_emprestimo: 'desc'},
        })
        return id_emprestimo
    }
}