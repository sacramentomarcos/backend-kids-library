import Fastify from 'fastify'
import { emprestimosRotas, usuariosRotas } from './routes/routes'
import { fastifyCors } from '@fastify/cors'


const fastify = Fastify({
  logger: {
    level: 'debug'
  }
});



const start = async () => {
  
await fastify.register(emprestimosRotas);
await fastify.register(usuariosRotas);



fastify.register(fastifyCors, {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
});

fastify.listen({ port: 3000 }, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
};

start();