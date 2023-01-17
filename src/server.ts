import Fastify from "fastify"

const app = Fastify()

app.get('/', () => {
    return 'NWNNW'
})

app.listen({
    port: 3333,
})
