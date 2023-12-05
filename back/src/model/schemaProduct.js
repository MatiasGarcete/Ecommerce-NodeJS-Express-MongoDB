const z = require('zod')

const Product = z.object({
    id: z.number(),
    nombre: z.string(),
    color: z.string(),
    precio: z.number(),
    Description: z.string()
})

module.exports = Product