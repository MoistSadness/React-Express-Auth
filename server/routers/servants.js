import express from 'express'
import {getServants} from '../controllers/servants.js'

const router = express.Router()

router.get('/', getServants)

export default router