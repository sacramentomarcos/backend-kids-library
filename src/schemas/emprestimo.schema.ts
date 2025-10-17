// type UUID = string & { readonly __uuid: unique symbol };

export const emprestimoSchema = {
    body: {
        type: 'object',
        properties: {
            id_usuario: {type: 'string'},
            id_exemplar: {type: 'number'},
        },
        required: ['id_usuario', 'id_exemplar'],
        additionalProperties: false
    }
}