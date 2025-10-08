export type Emprestimo = {
    id_emprestimo: number
    id_exemplar: number
    id_livro: number
    id_usuario: string
    realizado_em: Date
    data_realizado_em: Date
    data_devolucao_em: Date
    status: boolean
}