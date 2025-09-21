import prisma from './repository/repository'


async function todosUsuarios(){
    const dados = await prisma.tabela_teste.findMany()
    return dados
}

todosUsuarios()
    .then((dados) => console.log(dados))
    .catch((e) => console.log('[ERRO] - ' + e))
