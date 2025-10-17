import Fastify from 'fastify'
import { emprestimoRotas } from './routes/routes'

const fastify = Fastify({
  logger: {
    level: 'debug'
  }
})

const start = async () => {
  
await fastify.register(emprestimoRotas)

fastify.listen({
    port: 3000
},() => {
  console.log("🚀 Server running on http://localhost:3000");
})
}

start()