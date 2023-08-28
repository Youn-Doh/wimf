import { join } from 'node:path'
import * as Path from 'node:path'
import express from 'express'
import * as URL from 'node:url'
import cors, { CorsOptions } from 'cors'
import request from 'superagent'

import allRouter from './routes/routes'

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const server = express()

// server.get('/api/v1/greeting', (req, res) => {
//   const greetings = ['hola', 'hi', 'hello', 'howdy']
//   const index = Math.floor(Math.random() * greetings.length)
//   console.log(index)
//   res.json({ greeting: greetings[index] })
// })
server.use('/api/v1/', allRouter)

server.use(express.json())
server.use(cors('*' as CorsOptions))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
