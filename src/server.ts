import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)


// Metodos HTTP

app.get('/habits', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Ler'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333,
}).then (() => {
    console.log('HTTP Server running')
})
