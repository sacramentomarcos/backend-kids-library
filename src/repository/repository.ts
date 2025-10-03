import { Prisma, PrismaClient } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'


const prisma = new PrismaClient()

export const todosUsuarios = async () => {
    const dados = await prisma.tabela_teste.findMany()
    return dados.map((linha) => ({
        ...linha,
        id: Number(linha.id)
    }))
}

export const insertUsuario = async (idUsuario:number) => {
    try {
    const usuario = await prisma.tabela_teste.create({
        data: {
            id: idUsuario,
            teste_teste:'la ele bora bill meu irmaozinhuu'
        }
    })
    return usuario.id
    } catch (e) {
        throw e
    }
}