type UUID = string & { readonly __uuid: unique symbol };

export type EmprestimoDTO = {
    id_exemplar: number,
    id_usuario: UUID,
    data_devolucao_em: Date
}