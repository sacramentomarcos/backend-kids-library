import Fastify from 'fastify'
import { emprestimoRotas } from './routes/routes'

const fastify = Fastify({
    logger:true
})

fastify.register(emprestimoRotas)

fastify.listen({
    port: 3000
},() => {
  console.log("🚀 Server running on http://localhost:3000");
})