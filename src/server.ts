import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import {todosUsuarios, insertUsuario} from './repository/repository'
import { CreateUsuarioDTO, UsuarioDTO } from './types/userTypes'


const fastify = Fastify({
    logger:true
})

fastify.get('/usuarios', async (request, reply)=>{
    const dados = await todosUsuarios()
    console.log(dados)
    reply.status(200).send(dados)
})

fastify.get('/usuario/:id', async (request:FastifyRequest<{Params: UsuarioDTO}>, reply)=>{
    reply.status(200).send({mensagem:`usuario ${request.params.id}`})
})

fastify.post('/usuariocreate/:id', async (request:FastifyRequest<{Params: CreateUsuarioDTO}>, reply:FastifyReply)=>{
    const id_usado = request.params.id
    try {
    const id_retornado = await insertUsuario(id_usado)
    reply.status(200).send({mensagem:`usuario ${id_retornado} inserido com sucesso`})
    } catch (e){
        reply.status(409).send({message:e + '\n - Id inserido incorreto'})
    }
})

fastify.listen({
    port: 3000
})