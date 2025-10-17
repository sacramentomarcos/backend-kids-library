import { type EmprestimoDTO } from "../dto/emprestimo.dto"
import { EmprestimoEntity } from "../entities/emprestimo.entity"

export class EmprestimoMapper{
    static paraEntidade(dto:EmprestimoDTO){
        const entidade: EmprestimoEntity = {
            idExemplar: dto.id_exemplar,
            idUsuario: dto.id_usuario,
            dataDevolucaoEm: dto.data_devolucao_em
        }
        return entidade
    }
}