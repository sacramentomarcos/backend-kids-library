import prisma from "../lib/repository";

export default class UsuarioRepository {

    async buscaTodos() {
        try {
        const dados = await prisma.usuarios.findMany();
        return dados
        } catch (e) {
            throw new Error('Erro ao acessar banco de dados')
        }
    }
}