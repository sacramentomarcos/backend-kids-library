import { type EmprestimoDTO } from "../dto/emprestimo.dto"
import { EmprestimoEntity } from "../entities/emprestimo.entity"

export class EmprestimoMapper{
    static paraEntidade(dto:EmprestimoDTO){
        const entidade:EmprestimoEntity = {
            idLivro: dto.id_exemplar
        } 
        return 
    }

}