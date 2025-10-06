import { prisma } from './repository/repository'
import { Prisma } from './repository/repository'
import Fastify from 'fastify'

type emprestimos = Prisma.emprestimos.schema

const fastify = Fastify({
    logger: true
})

async function todosUsuarios(){
    const dados = await prisma.tabela_teste.findMany()
    return dados
}

async function all_emprestimos(){
    const data = await prisma.emprestimos.findMany()
    console.log(data)
    return data
}

fastify.get('/all_emprestimos', async (request, reply) => {
    const dados = await all_emprestimos()
    const devolveDados = dados.map((item:emprestimos) => {
        const retorno = {...item,
        id_emprestimo: item.id_emprestimo.toString(),
        id_exemplar: item.id_exemplar?.toString(),
        id_livro: item.id_livro?.toString()}
        return retorno
    })
    reply.status(200).send({ dados })
})

fastify.listen({
    port: 3333
})