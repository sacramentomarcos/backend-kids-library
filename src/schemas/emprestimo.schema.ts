// type UUID = string & { readonly __uuid: unique symbol };

export const emprestimoSchema = {
    body: {
        type: 'object',
        properties: {
            codigo_familia: {type: 'string'},
            id_livro: {type: 'number'},
        },
        required: ['id_usuario', 'id_exemplar'],
        additionalProperties: false
    }
}