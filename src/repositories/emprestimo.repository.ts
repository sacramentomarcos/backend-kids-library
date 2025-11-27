import dayjs from 'dayjs';
import prisma from '../lib/repository'


export class EmprestimoRepository {
    async buscarTodos() {
        try {
            const dados = prisma.vw_emprestimos.findMany()
            return dados
        } catch (e) {
            console.error(e)
            console.log('erro ao buscar os dados')
        }
    }

    async criar(dados:{id_livro:number, id_usuario:string, data_previsao_devolucao_em:Date, data_realizado_em:Date}) {

        try {
            const emprestimo = await prisma.emprestimos.create({
            data: {
                ...dados
            }
        })
        return emprestimo;
    } catch (e) {
        console.error('[ERRO] - ',e)
    }
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

    async mudaStatus(ids:number[]) {
    const today = dayjs().format('DDMMYYYY')
        try{
            const emprestimoAlterado = prisma.emprestimos.updateMany({
                where: {
                    id_emprestimo: {
                        in: ids
                    }
                },
                data: {
                    status: false,
                    data_devolucao_em: today
                }
            })
        return emprestimoAlterado
    } catch (e) {
        console.error(`${e} - erro repository`)
        return null
    }}
}
