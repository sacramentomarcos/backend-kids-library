import prisma from './repository/repository'
import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

async function todosUsuarios(){
    const dados = await prisma.tabela_teste.findMany()
    return dados
}

fastify.get('/all_usuarios', async (request, reply) => {
    const dados = await todosUsuarios()
    reply.send({dados})
})

fastify.listen({
    port: 3333
})