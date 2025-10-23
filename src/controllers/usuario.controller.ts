import UsuarioService from "../services/usuario.service";

export default class UsuarioController {
    private usuarioService: UsuarioService

    constructor(){
        this.usuarioService = new UsuarioService()
    }

    async busca(){
        try{
            const dados = this.usuarioService.buscaTodosUsuarios()
            return dados
        } catch (e) {
            console.error(e)
        }
    }


    // constructor() {
    //     private usuarioRepository: UsuarioRepository
    // }

    // async getById(id:string){
    //     //criar o Usuario aqui, usuarioEntity
    //     return 2
    // }
}