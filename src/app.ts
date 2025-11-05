import Fastify from 'fastify'
import { emprestimosRotas, usuariosRotas, livrosRotas } from './routes/routes'
import { fastifyCors } from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { jsonSchemaTransform } from 'fastify-type-provider-zod'
import humps from 'humps'



const app = Fastify({
  logger: {
    level: 'debug'
  }
});

// app.addHook('onRequest', (request, reply, payload, done) => {
//   if (payload && typeof payload === 'string') {
//     try {
//       const jsonPayLoad = JSON.parse(payload);
//       const camelCasePayload = humps.camelize(jsonPayLoad)
//       done(null, JSON.stringify(camelCasePayload))
//     } catch (e) {
//       done(null, payload);
//       return;
//     }
//   }
// })

app.register(fastifyCors, {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'DELETE', 'PUT'],
  credentials: true,
});

// app.register(fastifySwagger, {
//   mode: 'dynamic',
//   openapi: {
//     info: {
//       title: 'titulo', 
//       description: '',
//       version: '1.0.0'
//     },
//     servers:[{url: 'http://localhost:3000'}],
//     components: {
//       securitySchemes: {
//         Bearer: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT"
//        }
//       }
//     },
//     security: [{ Bearer: []}]
//   },
//   transform: jsonSchemaTransform
// })

// app.register(fastifySwaggerUi, {
//   routePrefix: "/docs"
// })

app.register(emprestimosRotas);
app.register(usuariosRotas);
app.register(livrosRotas);

export default app;