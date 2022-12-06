import express from 'express'
import morgan from 'morgan'


import indexRoutes from './routes/index.route.js'
import figuraRoutes from './routes/figura.route.js'

const app = express()


app.use(morgan('dev'))
app.use(express.json())

app.use(indexRoutes)
app.use(figuraRoutes)

export default app