import Fastify from 'fastify'
import { emprestimosRotas, usuariosRotas, livrosRotas } from './routes/routes'
import { fastifyCors } from '@fastify/cors'



const app = Fastify({
  logger: {
    level: 'debug'
  }
});


app.register(fastifyCors, {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  credentials: true,
});

app.register(emprestimosRotas);
app.register(usuariosRotas);
app.register(livrosRotas);

export default app;