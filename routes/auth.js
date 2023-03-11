import express from 'express'
import { Login, Register } from '../controllers/auth.js'
import { registerValidator, validatorLogin } from '../validators/auth.js'

const router = express.Router()

router.post('/register', registerValidator, Register)

router.post('/login', validatorLogin, Login)


export default router