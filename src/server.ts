import prisma from './lib/repository'

import Fastify, { FastifyRequest } from 'fastify'

import { EmprestimoDTO } from './dto/emprestimo.dto'
import { Emprestimo } from './entities/emprestimo.entity'

const fastify = Fastify({
    logger:true
})

// ROTAS EMPRESTIMO
// C
fastify.post('/emprestimos', async (request:FastifyRequest<{Body: EmprestimoDTO}>, reply) =>{

    const criaEmprestimo:Emprestimo = await prisma.emprestimos.create({
        data: {

        }
    })

    reply.status(200).send()
})

fastify.get('/emprestimos', async (request, reply) => {
    const dados = await prisma.emprestimos.findMany()
    reply.status(200).send(dados)
})

fastify.get('/emprestimos/:id', async (request:FastifyRequest<{ Params: { id: string } }>, reply) => {
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