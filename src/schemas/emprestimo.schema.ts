import { z } from 'zod';

export const EmprestimoSchema = z.object({
    idEmprestimo: z.number(),
    idExemplar: z.number(),
    idUsuario: z.uuidv4(),
    
})