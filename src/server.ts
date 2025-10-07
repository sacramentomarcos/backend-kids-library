import prisma from './repository/repository'

import Fastify, { FastifyRequest } from 'fastify'


const fastify = Fastify({
    logger:true
})

fastify.get('/emprestimos', async (request, reply) => {
    const dados = await prisma.emprestimos.findMany()
    reply.status(200).send(dados)
})

fastify.get('/emprestimo/:id', async (request:FastifyRequest<{ Params: { id: string } }>, reply) => {
    const params = request.params
    const id = Number(params.id)
    const dados = await prisma.emprestimos.findUnique({
        where: {
            id_emprestimo: id
        }
    })
    reply.status(200).send(dados)
})

fastify.listen({
    port: 3000
})