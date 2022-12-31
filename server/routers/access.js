import express from 'express'
import {register, login, updateAccessToken, logout } from '../controllers/access.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/updateToken', updateAccessToken)
router.post('/logout', logout)

export default router