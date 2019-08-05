import dotenv from 'dotenv'
import 'reflect-metadata'
dotenv.config()

// const auth = Symbol.for('auth')
const TServer = Symbol.for('server')

export { TServer }
