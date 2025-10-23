import UsuarioRepository from "../repositories/usuario.repository";

export default class UsuarioService {
    private usuarioRepo: UsuarioRepository

    constructor(){
        this.usuarioRepo = new UsuarioRepository
    }

    async buscaTodosUsuarios(){
        try {
            const todosUsuarios = await this.usuarioRepo.buscaTodos();
            return todosUsuarios
        } catch (e) {
            console.error(e)
        }
    }
}