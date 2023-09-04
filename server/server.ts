import { join } from 'node:path'
import * as Path from 'node:path'
import express from 'express'
import * as URL from 'node:url'
import cors, { CorsOptions } from 'cors'

import allRouter from './routes/routes'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

server.use(express.static(join(__dirname, 'public')))
server.use(express.json())

server.use(cors('*' as CorsOptions))

server.use('/api/v1/wimf', allRouter)
server.use('api/*', (req, res) => {
  res.sendStatus(404)
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
